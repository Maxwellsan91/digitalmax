import { ProcessStep as ProcessStepCard } from "@/components/cards/process-step";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section id="como-funciona" className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Como funciona"
            title="Do primeiro clique ao pedido de contacto"
            description="Um processo simples, fluido e orientado a resultados para negócios locais que querem crescer com previsibilidade."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 80}>
              <ProcessStepCard step={step} isLast={index === processSteps.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
