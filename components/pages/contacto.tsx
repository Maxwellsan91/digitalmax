import { type LocaleProps } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactSection } from "@/components/sections/contact-section";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Peça um diagnóstico gratuito à Digital Max. Fale connosco para melhorar a presença online do seu negócio em Portugal.",
  alternates: {
    canonical: `${SITE_URL}/contacto`
  }
};

export default function ContactPage({ locale = "pt" }: LocaleProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <ContactSection locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
