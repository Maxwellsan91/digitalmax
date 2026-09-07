import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export function MobileWhatsAppCta({ locale = "pt" }: LocaleProps) {
  return (
    <Link
      href={whatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(locale, "Abrir WhatsApp com mensagem pré-preenchida")}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(5,150,105,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-700 md:hidden"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </Link>
  );
}

