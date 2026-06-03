import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { problemCards } from "@/lib/site-data";

export function ProblemSection() {
  return (
    <section className="section-block section-pattern">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Problema"
            title="Se o seu negócio não aparece bem online, está a perder oportunidades"
            description="Hoje, grande parte das decisões começa online. Quando o site é fraco ou as redes sociais estão paradas, muitos clientes passam para o próximo negócio sem entrar em contacto."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card, index) => (
            <Reveal key={card.title} delayMs={index * 70}>
              <article className="card-surface h-full">
                <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
