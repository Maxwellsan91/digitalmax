import { type LocaleProps } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PlansSection } from "@/components/sections/plans-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { MobileWhatsAppCta } from "@/components/sections/mobile-whatsapp-cta";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Conheça os planos da Digital Max: soluções claras para cada fase do negócio, desde a presença inicial ao crescimento com tráfego pago.",
  alternates: {
    canonical: "https://digitalmax.pt/planos"
  }
};

export default function PlansPage({ locale = "pt" }: LocaleProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <PlansSection locale={locale} />
        <FinalCtaSection locale={locale} />
      </main>
      <MobileWhatsAppCta locale={locale} />
      <SiteFooter locale={locale} />
    </>
  );
}

