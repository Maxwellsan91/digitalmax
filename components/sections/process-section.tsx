import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import { ProcessStep as ProcessStepCard } from "@/components/cards/process-step";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/site-data";

type ProcessSectionProps = LocaleProps & { asPage?: boolean };

export function ProcessSection({ locale = "pt", asPage = false }: ProcessSectionProps) {
  return (
    <section id="como-funciona" className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow={t(locale, "Como funciona")}
            title={t(locale, "Do primeiro clique ao pedido de contacto")}
            description={t(locale, "Um processo simples, fluido e orientado a resultados para negócios locais que querem crescer com previsibilidade.")}
            headingLevel={asPage ? "h1" : "h2"}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 80}>
              <ProcessStepCard locale={locale} step={step} isLast={index === processSteps.length - 1} headingLevel={asPage ? "h2" : "h3"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
