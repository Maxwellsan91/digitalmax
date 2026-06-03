import type { ProcessStep as ProcessStepItem } from "@/lib/site-data";

type ProcessStepProps = {
  step: ProcessStepItem;
  isLast: boolean;
};

export function ProcessStep({ step, isLast }: ProcessStepProps) {
  return (
    <article className="card-surface relative h-full">
      {!isLast ? (
        <span
          className="absolute top-10 -right-6 hidden h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block"
          aria-hidden="true"
        />
      ) : null}
      <p className="inline-flex rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
        {step.step}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{step.title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
    </article>
  );
}

