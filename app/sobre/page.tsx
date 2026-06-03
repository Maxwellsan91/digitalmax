import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileWhatsAppCta } from "@/components/sections/mobile-whatsapp-cta";
import { TrustSection } from "@/components/sections/trust-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a DigitalMax, agência digital em Portugal focada em websites, redes sociais, tráfego pago e SEO local para negócios locais.",
  alternates: {
    canonical: "https://digitalmax.pt/sobre"
  }
};

const values = [
  {
    title: "Estratégia antes da execução",
    description:
      "Antes de criar qualquer coisa, percebemos o negócio, o cliente e os objetivos. A estratégia define o trabalho — não o contrário."
  },
  {
    title: "Foco em resultados concretos",
    description:
      "Não medimos sucesso por likes ou impressões. Medimos por pedidos de contacto, visibilidade local e crescimento mensurável."
  },
  {
    title: "Comunicação clara e próxima",
    description:
      "Sem jargão técnico desnecessário. Explicamos o que fazemos, porquê e como vai impactar o seu negócio — de forma simples."
  },
  {
    title: "Adaptação ao contexto",
    description:
      "Cada negócio tem o seu momento, orçamento e prioridades. Construímos soluções ajustadas, não pacotes genéricos."
  }
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">

        {/* Hero da página */}
        <section className="section-block section-pattern border-b border-slate-200/80 bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionTitle
                  eyebrow="Sobre"
                  title="Quem está por trás da DigitalMax"
                  description="Nascemos para apoiar pequenos e médios negócios em Portugal a crescer online com clareza e estratégia. Unimos design, marketing e acompanhamento contínuo para que a sua presença digital gere resultados concretos."
                />
                <p className="mt-6 text-xl font-medium text-slate-950">
                  Cada negócio é único — e a estratégia também deve ser.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  A DigitalMax foi criada com um propósito claro: dar às pequenas e médias empresas portuguesas
                  as mesmas ferramentas e estratégias digitais que as grandes marcas utilizam — mas adaptadas à
                  realidade, ao orçamento e aos objetivos de cada negócio local.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <TrustSection />
            </Reveal>
          </div>
        </section>

        {/* Valores */}
        <section className="section-block section-pattern">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Valores"
                title="O que nos orienta em cada projeto"
                description="Estes princípios definem a forma como trabalhamos, comunicamos e entregamos resultados a cada cliente."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delayMs={index * 80}>
                  <article className="card-surface h-full">
                    <h3 className="text-lg font-semibold text-slate-950">{value.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{value.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Missão */}
        <section className="section-block border-y border-slate-200/80 bg-white">
          <div className="section-shell max-w-3xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">Missão</p>
              <blockquote className="mt-4 text-2xl font-medium leading-snug text-slate-950 sm:text-3xl">
                "Tornar a presença digital acessível, estratégica e orientada a resultados para negócios locais em
                Portugal — independentemente da fase em que se encontram."
              </blockquote>
              <p className="mt-6 leading-relaxed text-slate-600">
                Acreditamos que cada negócio, independentemente da dimensão, merece uma presença online que transmita
                confiança, comunique com clareza e gere contactos reais. É isso que a DigitalMax constrói.
              </p>
            </Reveal>
          </div>
        </section>

        <FinalCtaSection />
      </main>
      <MobileWhatsAppCta />
      <SiteFooter />
    </>
  );
}
