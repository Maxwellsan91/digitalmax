import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getServiceBySlug, servicePages } from "@/lib/content-pages";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `https://www.digitalmax.pt/servicos/${slug}`
    }
  };
}

export default async function ServiceDetailPage({ locale = "pt", params }: ServicePageProps & LocaleProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content" className="section-block section-pattern">
        <article className="section-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-cyan-700">{t(locale, "Serviço")}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{t(locale, service.title)}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{t(locale, service.intro)}</p>

          <section className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="card-surface">
              <h2 className="text-2xl font-semibold text-slate-950">{t(locale, "O que está incluído")}</h2>
              <ul className="mt-4 space-y-2 text-slate-600">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>- {t(locale, bullet)}</li>
                ))}
              </ul>
            </div>

            <div className="card-surface">
              <h2 className="text-2xl font-semibold text-slate-950">{t(locale, "Como trabalhamos")}</h2>
              <ol className="mt-4 space-y-2 text-slate-600">
                {service.process.map((item, index) => (
                  <li key={item}>
                    {index + 1}. {t(locale, item)}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath("/contacto", locale)}
              className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {t(locale, "Pedir diagnóstico gratuito")}
            </Link>
            <Link
              href={localizedPath("/servicos", locale)}
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              {t(locale, "Ver todos os serviços")}
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
