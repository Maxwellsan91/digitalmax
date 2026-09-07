"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizedPath, type Locale } from "@/lib/i18n/routing";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <nav aria-label={locale === "en" ? "Language" : "Idioma"} className="inline-flex shrink-0 items-center rounded-full border border-slate-300 bg-white p-1 text-xs font-semibold dark:border-slate-600 dark:bg-slate-900">
      {(["pt", "en"] as const).map((language) => (
        <Link
          key={language}
          href={localizedPath(pathname, language)}
          hrefLang={language === "pt" ? "pt-PT" : "en"}
          lang={language === "pt" ? "pt-PT" : "en"}
          aria-label={language === "pt" ? "Português" : "English"}
          aria-current={locale === language ? "page" : undefined}
          className={`rounded-full px-2 py-2 transition ${locale === language ? "bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950" : "text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"}`}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
