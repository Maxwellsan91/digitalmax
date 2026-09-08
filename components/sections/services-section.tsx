import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Megaphone, MessageCircle, Rocket, Search, Sparkles, ClipboardList, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { services } from "@/lib/site-data";

const serviceIcons: LucideIcon[] = [Rocket, Sparkles, MessageCircle, Megaphone, Search, MapPin, ClipboardList];

export function ServicesSection({ locale = "pt" }: LocaleProps) {
  return (
    <section id="servicos" className="section-block section-pattern">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow={t(locale, "Serviços")}
              title={t(locale, "Tudo o que o seu negócio precisa para crescer online")}
              description={t(locale, "Estratégia, design e tecnologia para negócios locais em Portugal. Cada serviço foi pensado para transformar presença online em contactos e oportunidades reais.")}
            />
            <Link
              href={localizedPath("/servicos", locale)}
              aria-label={t(locale, "Ver todos os serviços")}
              className="shrink-0 inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 self-start sm:self-auto"
            >
              {t(locale, "Ver todos →")}
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 70}>
              <ServiceCard locale={locale} title={service.title} description={service.description} icon={serviceIcons[index]} href={service.href ?? "/servicos"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
