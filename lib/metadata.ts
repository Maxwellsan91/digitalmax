import type { Metadata } from "next";
import {
  OPEN_GRAPH_DESCRIPTION,
  OPEN_GRAPH_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL
} from "@/lib/site-config";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: "%s | Digital Max"
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "criação de sites em Portugal",
    "agência digital em Portugal",
    "gestão de redes sociais",
    "tráfego pago",
    "marketing digital para negócios locais",
    "websites para pequenos negócios",
    "SEO local",
    "presença digital"
  ],
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: OPEN_GRAPH_TITLE,
    description: OPEN_GRAPH_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Max - Criamos presença online que gera clientes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: OPEN_GRAPH_TITLE,
    description: OPEN_GRAPH_DESCRIPTION,
    images: ["/og-image.png"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  }
};
