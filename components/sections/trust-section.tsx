import type { LucideIcon } from "lucide-react";
import { BarChart3, CheckCircle2, LineChart, Rocket, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { trustPoints } from "@/lib/site-data";

const trustIcons: LucideIcon[] = [ShieldCheck, TrendingUp, Sparkles, BarChart3, LineChart, Rocket];

export function TrustSection() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-7 shadow-[0_10px_28px_rgba(15,23,42,0.07)]">
      <h3 className="text-2xl font-semibold text-slate-950">Pronto para construir os seus próximos resultados?</h3>
      <p className="mt-3 leading-relaxed text-slate-600">
        Trabalhamos lado a lado com negócios locais que querem crescer com consistência, tecnologia e decisões bem
        orientadas.
      </p>

      <div className="mt-6 grid gap-3">
        {trustPoints.map((item, index) => {
          const TrustIcon = trustIcons[index] ?? CheckCircle2;

          return (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <TrustIcon className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
