import type { Plan } from "@/lib/site-data";
import { CheckCircle2, Gauge } from "lucide-react";

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={`relative h-full rounded-3xl border p-5 transition duration-300 sm:p-7 ${
        plan.highlighted
          ? "-translate-y-1 border-slate-900 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.3)]"
          : "border-slate-200 bg-white text-slate-950 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
      }`}
    >
      {plan.highlighted ? (
        <span className="absolute -top-3 left-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-950">
          Recomendado
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold">{plan.name}</h3>
        <Gauge className={`h-5 w-5 ${plan.highlighted ? "text-cyan-300" : "text-cyan-700"}`} aria-hidden="true" />
      </div>
      <p className={`mt-4 leading-relaxed ${plan.highlighted ? "text-slate-200" : "text-slate-600"}`}>{plan.audience}</p>
      <p
        className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] ${
          plan.highlighted ? "bg-slate-800 text-cyan-300" : "bg-cyan-50 text-cyan-700"
        }`}
      >
        {plan.priceLabel}
      </p>
      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <CheckCircle2
              className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-cyan-300" : "text-cyan-600"}`}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

