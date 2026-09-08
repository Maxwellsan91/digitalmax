import { serviceOptions } from "./site-data";

export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export const contactLimits = { name: 120, company: 160, email: 254, phone: 40, service: 100, message: 5000 };
export const emptyContactForm: ContactFormData = { name: "", company: "", email: "", phone: "", service: "", message: "" };

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Indique o seu nome.";
  if (!data.company.trim()) errors.company = "Indique o nome do negócio.";
  if (!data.email.trim()) errors.email = "Indique o seu email.";
  else if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)) errors.email = "Introduza um email válido.";
  if (!data.phone.trim()) errors.phone = "Indique o seu telefone.";
  if (!serviceOptions.includes(data.service)) errors.service = "Escolha o serviço pretendido.";
  if (!data.message.trim()) errors.message = "Escreva uma mensagem curta com o seu objetivo.";
  for (const key of Object.keys(contactLimits) as (keyof ContactFormData)[]) {
    if (data[key].length > contactLimits[key]) errors[key] = "O texto excede o limite permitido.";
    if (key !== "message" && /[\r\n\x00]/.test(data[key])) errors[key] = "Introduza um valor válido.";
  }
  return errors;
}

export function parseContactForm(value: unknown): ContactFormData | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  const data = { ...emptyContactForm };
  for (const key of Object.keys(data) as (keyof ContactFormData)[]) {
    if (typeof record[key] !== "string") return null;
    data[key] = record[key].trim();
  }
  return data;
}

export function contactEmail(data: ContactFormData, locale: "pt" | "en") {
  return {
    to: ["geral@digitalmax.pt"],
    displayName: "Digital Max — Formulário do site",
    subject: `Novo pedido de diagnóstico — ${data.company}`,
    text: [
      "Novo pedido recebido através do formulário Digital Max.",
      "",
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `Email de contacto: ${data.email}`,
      `Telefone: ${data.phone}`,
      `Serviço: ${data.service}`,
      `Idioma do site: ${locale === "en" ? "Inglês" : "Português"}`,
      "",
      "Mensagem:",
      data.message,
      "",
      `Para responder ao visitante, envie a resposta para ${data.email}.`
    ].join("\n")
  };
}
