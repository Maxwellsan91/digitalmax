import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { servicePages } from "@/lib/content-pages";
import { MobileWhatsAppCta } from "@/components/sections/mobile-whatsapp-cta";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da Digital Max em Portugal: criação de sites, landing pages, gestão de redes sociais, tráfego pago e SEO local.",
  alternates: {
    canonical: "https://digitalmax.pt/servicos"
  }
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="section-block section-pattern">
        <section className="section-shell">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Serviços da Digital Max</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Estratégia, design e tecnologia para negócios locais em Portugal. Escolha o serviço certo para aumentar
            visibilidade, melhorar presença digital e gerar mais contactos.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {servicePages.map((service) => (
              <article key={service.slug} className="card-surface">
                <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="mt-5 inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
                >
                  Ver detalhes do serviço
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <MobileWhatsAppCta />
      <SiteFooter />
    </>
  );
}

