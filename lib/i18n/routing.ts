export type Locale = "pt" | "en";
export type LocaleProps = { locale?: Locale };

const sections: Record<string, string> = {
  servicos: "services",
  "como-funciona": "how-it-works",
  planos: "plans",
  sobre: "about",
  contacto: "contact",
  blog: "blog"
};

const slugs: Record<string, string> = {
  "criacao-de-sites": "website-development",
  "landing-pages": "landing-pages",
  "gestao-redes-sociais": "social-media-management",
  "trafego-pago": "paid-advertising",
  "seo-local": "local-seo",
  "quanto-custa-criar-site-profissional-portugal": "professional-website-cost-portugal",
  "como-website-ajuda-pequenos-negocios": "how-websites-help-small-businesses",
  "o-que-e-seo-local-portugal": "what-is-local-seo-portugal",
  "site-ou-redes-sociais-por-onde-comecar": "website-or-social-media-where-to-start",
  "como-melhorar-presenca-online-restaurante": "improve-restaurant-online-presence",
  "gestao-redes-sociais-o-que-publicar": "social-media-what-to-post",
  "landing-page-o-que-e-quando-usar": "landing-pages-when-to-use",
  "trafego-pago-negocios-locais-vale-a-pena": "paid-advertising-local-businesses",
  "como-aparecer-melhor-no-google-portugal": "improve-google-visibility-portugal",
  "erros-que-fazem-negocios-perder-clientes-online": "mistakes-that-cost-customers-online"
};

export function englishSlug(slug: string): string {
  return slugs[slug] ?? slug;
}

export function portugueseSlug(slug: string): string {
  return Object.entries(slugs).find(([, en]) => en === slug)?.[0] ?? slug;
}

/** Convert internal page URLs in either language; leave assets and external links alone. */
export function localizedPath(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const match = href.match(/^([^?#]*)(.*)$/)!;
  const parts = match[1].split("/").filter(Boolean);
  if (parts[0] === "en") {
    parts.shift();
    if (parts[0]) parts[0] = Object.entries(sections).find(([, en]) => en === parts[0])?.[0] ?? parts[0];
    if (parts[1]) parts[1] = portugueseSlug(parts[1]);
  }
  if (parts.length && !sections[parts[0]]) return href;
  if (locale === "en") {
    if (parts[0]) parts[0] = sections[parts[0]];
    if (parts[1]) parts[1] = englishSlug(parts[1]);
    parts.unshift("en");
  }
  return `/${parts.join("/")}${match[2]}`;
}

export function languageAlternates(path: string) {
  return {
    "pt-PT": `https://digitalmax.pt${localizedPath(path, "pt")}`,
    en: `https://digitalmax.pt${localizedPath(path, "en")}`,
    "x-default": `https://digitalmax.pt${localizedPath(path, "pt")}`
  };
}
