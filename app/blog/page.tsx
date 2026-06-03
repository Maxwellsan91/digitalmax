import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { blogPosts } from "@/lib/content-pages";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre websites, SEO local, redes sociais e tráfego pago para pequenos e médios negócios em Portugal.",
  alternates: {
    canonical: "https://digitalmax.pt/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="section-block section-pattern">
        <section className="section-shell">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Blog de marketing digital</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Conteúdo educativo para negócios locais em Portugal que querem melhorar presença digital, aparecer melhor no
            Google e gerar mais pedidos de contacto.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card-surface">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-cyan-700">{post.keyword}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-3 text-slate-600">{post.seoDescription}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
                >
                  Ler artigo
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

