"use client";

import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/site-data";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection({ locale = "pt" }: LocaleProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-block section-pattern border-y border-slate-200/80 bg-white">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title={t(locale, "Perguntas frequentes")}
            description={t(locale, "Respostas claras para dúvidas comuns sobre websites, redes sociais, tráfego pago e SEO local para negócios em Portugal.")}
          />
        </Reveal>

        <div className="mt-10 grid gap-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-question-${locale}-${index}`;
            const panelId = `faq-answer-${locale}-${index}`;
            return (
              <Reveal key={item.question} delayMs={index * 30}>
                <article className="card-surface overflow-hidden !p-0">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-500 sm:px-6 sm:py-5"
                    >
                      <span className="text-base font-semibold text-slate-950 sm:text-lg">{t(locale, item.question)}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t border-slate-200/80 px-5 pb-5 pt-4 sm:px-6">
                      <p className="leading-relaxed text-slate-600">{t(locale, item.answer)}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
