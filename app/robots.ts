import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/"]
      }
    ],
    sitemap: "https://digitalmax.pt/sitemap.xml",
    host: "https://digitalmax.pt"
  };
}

