import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { blogPosts, getBlogPostBySlug } from "@/lib/content-pages";
import { SITE_URL } from "@/lib/site-config";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`
    }
  };
}

export default async function BlogDetailPage({ locale = "pt", params }: BlogPageProps & LocaleProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content" className="section-block section-pattern">
        <article className="section-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-cyan-700">{t(locale, post.keyword)}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{t(locale, post.title)}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{t(locale, post.intro)}</p>

          <div className="mt-10 space-y-6">
            {post.sections.map((section) => (
              <section key={section.heading} className="card-surface">
                <h2 className="text-2xl font-semibold text-slate-950">{t(locale, section.heading)}</h2>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {section.points.map((point) => (
                    <li key={point}>- {t(locale, point)}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
