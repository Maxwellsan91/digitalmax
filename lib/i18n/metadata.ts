import type { Metadata } from "next";
import { t } from "./index";
import { languageAlternates, localizedPath, type Locale } from "./routing";

function translateMetadataValue(value: unknown, locale: Locale): unknown {
  if (typeof value === "string") return t(locale, value);
  if (Array.isArray(value)) return value.map((item) => translateMetadataValue(item, locale));
  if (value && typeof value === "object" && !(value instanceof URL)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateMetadataValue(item, locale)]));
  }
  return value;
}

export function localizedMetadata(metadata: Metadata, locale: Locale): Metadata {
  const translated = translateMetadataValue(metadata, locale) as Metadata;
  const canonical = metadata.alternates?.canonical;
  const path = typeof canonical === "string" ? new URL(canonical, "https://www.digitalmax.pt").pathname : "/";
  const url = `https://www.digitalmax.pt${localizedPath(path, locale)}`;
  const image = locale === "en" ? "/og-image-en.svg" : "/og-image.svg";
  const title = typeof translated.title === "string" ? translated.title : undefined;
  return {
    ...translated,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      ...translated.openGraph,
      ...(title ? { title } : {}),
      ...(translated.description ? { description: translated.description } : {}),
      url,
      siteName: "Digital Max",
      type: "website",
      locale: locale === "en" ? "en_GB" : "pt_PT",
      alternateLocale: locale === "en" ? "pt_PT" : "en_GB",
      images: [{ url: image, width: 1200, height: 630, alt: "Digital Max" }]
    },
    twitter: {
      ...translated.twitter,
      card: "summary_large_image",
      ...(title ? { title } : {}),
      ...(translated.description ? { description: translated.description } : {}),
      images: [image]
    }
  };
}
