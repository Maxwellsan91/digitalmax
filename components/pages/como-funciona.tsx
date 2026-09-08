import { type LocaleProps } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProcessSection } from "@/components/sections/process-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Descubra como a Digital Max trabalha: desde o diagnóstico gratuito até ao acompanhamento contínuo, um processo simples e orientado a resultados.",
  alternates: {
    canonical: `${SITE_URL}/como-funciona`
  }
};

export default function HowItWorksPage({ locale = "pt" }: LocaleProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <ProcessSection locale={locale} asPage />
        <FinalCtaSection locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
