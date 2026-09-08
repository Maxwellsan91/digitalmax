import type { MetadataRoute } from "next";
import { blogPosts, servicePages } from "@/lib/content-pages";
import { languageAlternates, localizedPath } from "@/lib/i18n/routing";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/servicos", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/como-funciona", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/planos", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/sobre", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contacto", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.85 },
    ...servicePages.map((service) => ({
      path: `/servicos/${service.slug}`, changeFrequency: "weekly" as const, priority: 0.8
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`, changeFrequency: "monthly" as const, priority: 0.72
    }))
  ];

  return publishedRoutes.flatMap((route) => (["pt", "en"] as const).map((locale) => ({
    url: `${SITE_URL}${localizedPath(route.path, locale)}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: { languages: languageAlternates(route.path) }
  })));
}
