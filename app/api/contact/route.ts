import { createContactHandler } from "@/lib/server/contact-handler";

export const runtime = "nodejs";

export const POST = createContactHandler({
  fetch: (...args) => fetch(...args),
  token: () => process.env.HOSTINGER_EMAIL_TOKEN,
  mailbox: () => process.env.HOSTINGER_EMAIL_MAILBOX_ID
});
