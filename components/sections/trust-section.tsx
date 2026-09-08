import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import type { LucideIcon } from "lucide-react";
import { BarChart3, CheckCircle2, LineChart, Rocket, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { trustPoints } from "@/lib/site-data";

const trustIcons: LucideIcon[] = [ShieldCheck, TrendingUp, Sparkles, BarChart3, LineChart, Rocket];

type TrustSectionProps = LocaleProps & { headingLevel?: "h2" | "h3" };

export function TrustSection({ locale = "pt", headingLevel = "h3" }: TrustSectionProps) {
  const Heading = headingLevel;

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-7 shadow-[0_10px_28px_rgba(15,23,42,0.07)]">
      <Heading className="text-2xl font-semibold text-slate-950">{t(locale, "Pronto para construir os seus próximos resultados?")}</Heading>
      <p className="mt-3 leading-relaxed text-slate-600">
        {t(locale, "Trabalhamos lado a lado com negócios locais que querem crescer com consistência, tecnologia e decisões bem orientadas.")}
      </p>

      <div className="mt-6 grid gap-3">
        {trustPoints.map((item, index) => {
          const TrustIcon = trustIcons[index] ?? CheckCircle2;

          return (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <TrustIcon className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{t(locale, item)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
