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
import { MobileWhatsAppCta } from "@/components/sections/mobile-whatsapp-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { TrustSection } from "@/components/sections/trust-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

function AboutSummarySection() {
  return (
    <section id="sobre" className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <Reveal>
          <div>
            <SectionTitle
              eyebrow="Sobre"
              title="Quem está por trás da DigitalMax"
              description="Nascemos para apoiar pequenos e médios negócios em Portugal a crescer online com clareza e estratégia. Unimos design, marketing e acompanhamento contínuo para que a sua presença digital gere resultados concretos."
            />
            <p className="mt-6 text-xl font-medium text-slate-950">
              Cada negócio é único — e a estratégia também deve ser.
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              Conhecer a DigitalMax →
            </Link>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <TrustSection />
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="mobile-safe-bottom md:pb-0">
        <StructuredData />
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <PlansSection />
        <AboutSummarySection />
        <FaqSection />
        <FinalCtaSection />
        <ContactFormSection />
      </main>

      <MobileWhatsAppCta />
      <SiteFooter />
    </>
  );
}
