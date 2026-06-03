import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Megaphone, MessageCircle, Rocket, Search, Sparkles, ClipboardList, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { services } from "@/lib/site-data";

const serviceIcons: LucideIcon[] = [Rocket, Sparkles, MessageCircle, Megaphone, Search, MapPin, ClipboardList];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-block section-pattern">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Serviços"
              title="Tudo o que o seu negócio precisa para crescer online"
              description="Estratégia, design e tecnologia para negócios locais em Portugal. Cada serviço foi pensado para transformar presença online em contactos e oportunidades reais."
            />
            <Link
              href="/servicos"
              className="shrink-0 inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500 self-start sm:self-auto"
            >
              Ver todos →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 70}>
              <ServiceCard title={service.title} description={service.description} icon={serviceIcons[index]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
