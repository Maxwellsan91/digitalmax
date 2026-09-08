import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PlansSection } from "@/components/sections/plans-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { StructuredData } from "@/components/seo/structured-data";
import { TrustSection } from "@/components/sections/trust-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

function AboutSummarySection({ locale = "pt" }: LocaleProps) {
  return (
    <section id="sobre" className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <Reveal>
          <div>
            <SectionTitle
              eyebrow={t(locale, "Sobre")}
              title={t(locale, "Quem está por trás da Digital Max")}
              description={t(locale, "A Digital Max ajuda negócios em Portugal a ganhar visibilidade online, atrair mais contactos e crescer através de websites, redes sociais e campanhas digitais.")}
            />
            <p className="mt-6 text-xl font-medium text-slate-950">
              {t(locale, "Cada negócio é único — e a estratégia também deve ser.")}
            </p>
            <Link
              href={localizedPath("/sobre", locale)}
              className="mt-6 inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              {t(locale, "Conhecer a Digital Max →")}
            </Link>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <TrustSection locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage({ locale = "pt" }: LocaleProps) {
  return (
    <>
      <SiteHeader locale={locale} />

      <main id="main-content">
        <StructuredData locale={locale} />
        <HeroSection locale={locale} />
        <ProblemSection locale={locale} />
        <ServicesSection locale={locale} />
        <ProcessSection locale={locale} />
        <PlansSection locale={locale} />
        <AboutSummarySection locale={locale} />
        <FaqSection locale={locale} />
        <FinalCtaSection locale={locale} />
        <ContactFormSection locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
