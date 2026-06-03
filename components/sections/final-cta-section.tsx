import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WHATSAPP_LINK } from "@/lib/contact";

export function FinalCtaSection() {
  return (
    <section className="section-block">
      <div className="section-shell section-pattern-dark dark-cta relative overflow-hidden rounded-[2rem] px-8 py-14 text-center text-white sm:px-14 sm:py-16">
        <div className="absolute -top-16 left-14 h-36 w-36 rounded-full border border-cyan-300/40" aria-hidden="true" />
        <div className="absolute -bottom-20 right-10 h-44 w-44 rounded-full border border-blue-300/30" aria-hidden="true" />

        <Reveal>
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">
            Pronto para dar o próximo passo?
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
            Peça um diagnóstico gratuito e receba um plano claro para tornar o seu negócio mais visível, mais
            confiável e mais preparado para crescer.
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href="/contacto"
              className="bg-white text-slate-950 hover:bg-slate-100"
              ariaLabel="Ir para o formulário e receber diagnóstico gratuito"
            >
              Receber diagnóstico gratuito
            </Button>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a DigitalMax no WhatsApp"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Falar agora no WhatsApp
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
