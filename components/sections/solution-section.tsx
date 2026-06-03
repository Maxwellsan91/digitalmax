import type { LucideIcon } from "lucide-react";
import { BarChart3, CircleDot, ClipboardList, Megaphone, Rocket, Search, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { solutionCards } from "@/lib/site-data";

const solutionIcons: LucideIcon[] = [Sparkles, Rocket, Megaphone, BarChart3, Search, CircleDot, ClipboardList];

export function SolutionSection() {
  return (
    <section className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Solução"
            title="A Digital Max cria presença online com estratégia, foco e continuidade"
            description="Sites, redes sociais e tráfego pago para negócios que querem crescer. Não é só ter um site bonito — é gerar contactos reais todos os meses."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionCards.map((card, index) => {
            const Icon = solutionIcons[index];
            return (
              <Reveal key={card.title} delayMs={index * 60}>
                <article className="card-surface h-full">
                  <div className="inline-flex rounded-xl bg-cyan-50 p-2.5">
                    <Icon className="h-5 w-5 text-cyan-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
