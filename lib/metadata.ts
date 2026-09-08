import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://www.digitalmax.pt"),
  applicationName: "Digital Max",
  title: {
    default: "Digital Max | Sites, Redes Sociais e Tráfego Pago em Portugal",
    template: "%s | Digital Max"
  },
  description:
    "A Digital Max ajuda negócios em Portugal a ganhar visibilidade online, atrair mais contactos e crescer através de websites, redes sociais e campanhas digitais.",
  authors: [{ name: "Digital Max", url: "https://www.digitalmax.pt" }],
  creator: "Digital Max",
  publisher: "Digital Max",
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
    canonical: "https://www.digitalmax.pt"
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
    title: "Digital Max | Sites, Redes Sociais e Tráfego Pago em Portugal",
    description:
      "A Digital Max ajuda negócios em Portugal a ganhar visibilidade online, atrair mais contactos e crescer através de websites, redes sociais e campanhas digitais.",
    url: "https://www.digitalmax.pt",
    siteName: "Digital Max",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Digital Max - Criamos presença online que gera clientes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Max | Sites, Redes Sociais e Tráfego Pago em Portugal",
    description:
      "Sites, redes sociais e tráfego pago para negócios que querem crescer.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  }
};
