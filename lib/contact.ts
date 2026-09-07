import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routing";

export const WHATSAPP_PHONE = "351XXXXXXXXX";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, vi o site da Digital Max e gostaria de pedir um diagnóstico gratuito para o meu negócio.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;


export function whatsappLink(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(t(locale, WHATSAPP_DEFAULT_MESSAGE))}`;
}
