import { contactEmail, parseContactForm, validateContactForm } from "../contact-form";

const MAX_BODY_BYTES = 24_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

// Per-process protection. The deployment should also enforce an edge rate limit.
export function createContactHandler(options: {
  fetch: typeof fetch;
  token: () => string | undefined;
  mailbox: () => string | undefined;
  now?: () => number;
}) {
  const attempts = new Map<string, { count: number; reset: number }>();
  const now = options.now ?? Date.now;

  return async function handleContact(request: Request): Promise<Response> {
    const json = (status: number, body: object, headers: Record<string, string> = {}) =>
      Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });

    const origin = request.headers.get("origin");
    if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") {
      return json(403, { error: "forbidden" });
    }
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return json(415, { error: "invalid_content_type" });
    }

    const timestamp = now();
    for (const [key, entry] of attempts) if (entry.reset <= timestamp) attempts.delete(key);
    // Trust forwarding headers only behind the deployment's managed reverse proxy.
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const entry = attempts.get(ip);
    if (entry && entry.count >= MAX_ATTEMPTS) {
      return json(429, { error: "too_many_requests" }, { "Retry-After": String(Math.ceil((entry.reset - timestamp) / 1000)) });
    }
    if (!entry && attempts.size >= 2000) return json(503, { error: "temporarily_unavailable" });
    attempts.set(ip, { count: (entry?.count ?? 0) + 1, reset: entry?.reset ?? timestamp + WINDOW_MS });

    if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) return json(413, { error: "request_too_large" });
    let payload: unknown;
    try {
      const reader = request.body?.getReader();
      if (!reader) return json(400, { error: "invalid_request" });
      const decoder = new TextDecoder();
      let size = 0;
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > MAX_BODY_BYTES) {
          await reader.cancel();
          return json(413, { error: "request_too_large" });
        }
        text += decoder.decode(value, { stream: true });
      }
      payload = JSON.parse(text + decoder.decode());
    } catch {
      return json(400, { error: "invalid_request" });
    }
    const data = parseContactForm(payload);
    if (!data) return json(400, { error: "invalid_request" });
    const record = payload as Record<string, unknown>;
    if (typeof record.website !== "string" || record.website !== "") return json(400, { error: "invalid_request" });
    if (record.locale !== "pt" && record.locale !== "en") return json(400, { error: "invalid_request" });
    const errors = validateContactForm(data);
    if (Object.keys(errors).length) return json(422, { errors });

    const token = options.token();
    const mailbox = options.mailbox();
    if (!token || !mailbox) return json(503, { error: "temporarily_unavailable" });
    try {
      const response = await options.fetch(
        `https://api.mail.hostinger.com/api/v1/mailboxes/${encodeURIComponent(mailbox)}/send`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json", "User-Agent": "DigitalMax-Contact/1.0" },
          body: JSON.stringify(contactEmail(data, record.locale)),
          signal: AbortSignal.timeout(15_000),
          redirect: "error"
        }
      );
      // The documented success status is 204. Never retry a send automatically.
      if (response.status !== 204) return json(502, { error: "delivery_failed" });
      return json(200, { ok: true });
    } catch {
      return json(502, { error: "delivery_failed" });
    }
  };
}
