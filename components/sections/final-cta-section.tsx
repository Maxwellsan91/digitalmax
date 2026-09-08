import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection({ locale = "pt" }: LocaleProps) {
  return (
    <section className="section-block">
      <div className="section-shell section-pattern-dark dark-cta relative overflow-hidden rounded-[2rem] px-8 py-14 text-center text-white sm:px-14 sm:py-16">
        <div className="absolute -top-16 left-14 h-36 w-36 rounded-full border border-cyan-300/40" aria-hidden="true" />
        <div className="absolute -bottom-20 right-10 h-44 w-44 rounded-full border border-blue-300/30" aria-hidden="true" />

        <Reveal>
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">
            {t(locale, "Pronto para dar o próximo passo?")}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
            {t(locale, "Peça um diagnóstico gratuito e receba um plano claro para tornar o seu negócio mais visível, mais confiável e mais preparado para crescer.")}
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={localizedPath("/contacto", locale)}
              className="bg-white text-slate-950 hover:bg-slate-100"
              ariaLabel={t(locale, "Ir para o formulário e receber diagnóstico gratuito")}
            >
              {t(locale, "Receber diagnóstico gratuito")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
