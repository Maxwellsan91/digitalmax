import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";
import { ArrowUpRight, LineChart } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { heroDashboardStats, heroGrowthBars } from "@/lib/site-data";

const heroTrustItems = [
  "Foco em negócios locais",
  "Websites, redes sociais e campanhas",
  "Diagnóstico gratuito",
  "Estratégia orientada a contactos"
];

export function HeroSection({ locale = "pt" }: LocaleProps) {
  return (
    <section id="inicio" className="hero-bg relative overflow-hidden border-b border-slate-200/80 pt-12 pb-14 sm:pt-20 sm:pb-24">
      <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative grid items-center gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:gap-14">
        <Reveal>
          <div>
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1">
              <BrandLogo variant="text" className="scale-[0.92]" />
            </div>

            <h1 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
              {t(locale, "Presença online no máximo nível para o seu negócio")}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {t(locale, "Criamos websites, gerimos redes sociais e campanhas digitais para ajudar negócios em Portugal a atrair mais clientes todos os meses.")}
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
              <Button href={localizedPath("/contacto", locale)} ariaLabel={t(locale, "Ir para contacto e pedir diagnóstico gratuito")} className="w-full sm:w-auto">
                {t(locale, "Pedir diagnóstico gratuito")}
              </Button>
              <Button href={localizedPath("/servicos", locale)} variant="secondary" ariaLabel={t(locale, "Ir para a secção de serviços")} className="w-full sm:w-auto">
                {t(locale, "Ver serviços")}
              </Button>
            </div>

            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {heroTrustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600" aria-hidden="true" />
                  {t(locale, item)}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="hidden sm:block card-premium dashboard-glass soft-grid relative overflow-hidden p-4 sm:p-7">
            <div className="absolute -top-10 right-6 h-24 w-24 rounded-full border border-cyan-300/40 pulse-soft" aria-hidden="true" />
            <div className="absolute bottom-8 -left-7 h-20 w-20 rounded-full border border-blue-300/40 float-slow" aria-hidden="true" />

            <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">{t(locale, "Dashboard de crescimento")}</p>
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {t(locale, "+24% mensal")}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {heroDashboardStats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500">{t(locale, item.label)}</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">{t(locale, item.value)}</p>
                    <p className={`mt-1 text-xs font-semibold ${item.positive ? "text-emerald-600" : "text-slate-500"}`}>
                      {t(locale, item.change)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{t(locale, "Crescimento mensal")}</p>
                  <LineChart className="h-4 w-4 text-cyan-600" aria-hidden="true" />
                </div>
                <div className="grid grid-cols-6 items-end gap-2">
                  {heroGrowthBars.map((bar) => (
                    <div key={bar.month} className="flex flex-col items-center gap-1">
                      <div className="flex h-20 w-full items-end rounded-md bg-slate-200/70 p-1">
                        <div
                          className="w-full rounded bg-gradient-to-t from-cyan-500 to-blue-600 transition-all duration-500"
                          style={{ height: `${bar.value}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-slate-500">{t(locale, bar.month)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">{t(locale, "Foco total")}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{t(locale, "Negócios locais")}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/95 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">{t(locale, "Diagnóstico")}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{t(locale, "Gratuito")}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
