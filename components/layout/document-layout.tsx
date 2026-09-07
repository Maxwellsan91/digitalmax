import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routing";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function DocumentLayout({ children, locale }: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  return (
    <html lang={locale === "en" ? "en" : "pt-PT"} className="scroll-smooth" suppressHydrationWarning>
      {/* App Router root document shared by both language layouts. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {t(locale, "Saltar para o conteúdo principal")}
        </a>
        {children}
      </body>
    </html>
  );
}
