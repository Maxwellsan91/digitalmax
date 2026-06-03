import { TrustSection } from "@/components/sections/trust-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
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
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <TrustSection />
        </Reveal>
      </div>
    </section>
  );
}
