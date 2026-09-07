import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import { PlanCard } from "@/components/cards/plan-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { plans } from "@/lib/site-data";

export function PlansSection({ locale = "pt" }: LocaleProps) {
  return (
    <section id="planos" className="section-block section-pattern">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow={t(locale, "Planos")}
            title={t(locale, "Planos claros para cada fase do seu negócio")}
            description={t(locale, "Sem abordagens agressivas. Escolhemos o formato certo para gerar visibilidade, contactos e evolução contínua.")}
            centered
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delayMs={index * 90}>
              <PlanCard locale={locale} plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
