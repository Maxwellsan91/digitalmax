import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import type { ProcessStep as ProcessStepItem } from "@/lib/site-data";

type ProcessStepProps = {
  step: ProcessStepItem;
  isLast: boolean;
};

export function ProcessStep({ locale = "pt", step, isLast }: ProcessStepProps & LocaleProps) {
  return (
    <article className="card-surface relative h-full">
      {!isLast ? (
        <span
          className="absolute top-10 -right-6 hidden h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block"
          aria-hidden="true"
        />
      ) : null}
      <p className="inline-flex rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
        {t(locale, step.step)}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{t(locale, step.title)}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{t(locale, step.description)}</p>
    </article>
  );
}

