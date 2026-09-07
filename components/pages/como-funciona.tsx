import { type LocaleProps } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProcessSection } from "@/components/sections/process-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { MobileWhatsAppCta } from "@/components/sections/mobile-whatsapp-cta";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Descubra como a Digital Max trabalha: desde o diagnóstico gratuito até ao acompanhamento contínuo, um processo simples e orientado a resultados.",
  alternates: {
    canonical: "https://digitalmax.pt/como-funciona"
  }
};

export default function HowItWorksPage({ locale = "pt" }: LocaleProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <ProcessSection locale={locale} />
        <FinalCtaSection locale={locale} />
      </main>
      <MobileWhatsAppCta locale={locale} />
      <SiteFooter locale={locale} />
    </>
  );
}

