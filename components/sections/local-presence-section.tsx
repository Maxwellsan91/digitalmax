import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import { Globe2, MapPinned } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function LocalPresenceSection({ locale = "pt" }: LocaleProps) {
  return (
    <section className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell">
        <Reveal>
          <article className="card-surface rounded-3xl p-7 sm:p-9">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-cyan-700">
              <MapPinned className="h-3.5 w-3.5" aria-hidden="true" />
              {t(locale, "Atendemos negócios em Portugal")}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t(locale, "Presença online para negócios locais e empresas de serviços")}
            </h2>

            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-600">
              {t(locale, "A Digital Max é uma agência digital em Portugal que apoia negócios locais e empresas de serviços a ganhar visibilidade online, atrair mais contactos e crescer através de websites, redes sociais e campanhas digitais.")}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              <Globe2 className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              {t(locale, "Estratégia, design e tecnologia para negócios locais em Portugal")}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

