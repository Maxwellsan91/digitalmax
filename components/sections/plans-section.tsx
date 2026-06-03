import { PlanCard } from "@/components/cards/plan-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { plans } from "@/lib/site-data";

export function PlansSection() {
  return (
    <section id="planos" className="section-block section-pattern">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Planos"
            title="Planos claros para cada fase do seu negócio"
            description="Sem abordagens agressivas. Escolhemos o formato certo para gerar visibilidade, contactos e evolução contínua."
            centered
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delayMs={index * 90}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
