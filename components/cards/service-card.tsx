import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ locale = "pt", title, description, icon: Icon }: ServiceCardProps & LocaleProps) {
  return (
    <article className="group card-surface relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" aria-hidden="true" />
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-cyan-100/60 blur-xl" aria-hidden="true" />
      <div className="absolute right-4 top-4 flex items-center gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
      </div>
      <div className="inline-flex rounded-xl bg-slate-900 p-2.5">
        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-950">{t(locale, title)}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{t(locale, description)}</p>
      <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition group-hover:translate-x-1 group-hover:text-slate-950">
        {t(locale, "Saber mais")}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </p>
    </article>
  );
}

