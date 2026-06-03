import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const themeInitScript = `
(() => {
  try {
    const saved = localStorage.getItem("digitalmax-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (_) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalmax.pt"),
  applicationName: "DigitalMax",
  title: {
    default: "DigitalMax | Sites, Redes Sociais e Tráfego Pago em Portugal",
    template: "%s | DigitalMax"
  },
  description:
    "A DigitalMax cria websites, gere redes sociais e campanhas digitais para ajudar negócios em Portugal a ganhar presença online e gerar mais clientes.",
  authors: [{ name: "DigitalMax", url: "https://digitalmax.pt" }],
  creator: "DigitalMax",
  publisher: "DigitalMax",
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
    canonical: "https://digitalmax.pt"
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
    title: "DigitalMax | Sites, Redes Sociais e Tráfego Pago em Portugal",
    description:
      "A DigitalMax cria websites, gere redes sociais e campanhas digitais para ajudar negócios em Portugal a ganhar presença online e gerar mais clientes.",
    url: "https://digitalmax.pt",
    siteName: "DigitalMax",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "DigitalMax - Criamos presença online que gera clientes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalMax | Sites, Redes Sociais e Tráfego Pago em Portugal",
    description:
      "Websites, redes sociais e campanhas digitais para negócios em Portugal ganharem mais visibilidade e clientes.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

