import type { MetadataRoute } from "next";
import { blogPosts, servicePages } from "@/lib/content-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digitalmax.pt";
  const now = new Date();

  const publishedRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/servicos", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/sobre", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contacto", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.85 }
  ];

  // Ativar quando as páginas forem publicadas:
  // /servicos
  // /servicos/criacao-de-sites
  // /servicos/landing-pages
  // /servicos/gestao-redes-sociais
  // /servicos/trafego-pago
  // /servicos/seo-local
  // /sobre
  // /contacto
  // /blog

  const serviceRoutes = servicePages.map((service) => ({
    path: `/servicos/${service.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  return [...publishedRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}

