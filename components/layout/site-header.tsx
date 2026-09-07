"use client";

import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader({ locale = "pt" }: LocaleProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${isScrolled ? "nav-glass shadow-[0_8px_30px_rgba(15,23,42,0.08)]" : "bg-transparent"}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-3.5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <BrandLogo href={localizedPath("/", locale)} variant="symbol" className="shrink-0 [&_svg]:hidden min-[380px]:[&_svg]:block" />

          <nav aria-label={t(locale, "Navegação principal")} className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(item.href, locale)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {t(locale, item.label)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle locale={locale} />
            <Button href={localizedPath("/contacto", locale)} ariaLabel={t(locale, "Ir para o formulário de contacto e receber diagnóstico gratuito")}>
              {t(locale, "Pedir diagnóstico")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle locale={locale} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm"
              aria-label={isMenuOpen ? t(locale, "Fechar menu") : t(locale, "Abrir menu")}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="mt-3 hidden items-center justify-center gap-4 sm:flex lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(item.href, locale)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {t(locale, item.label)}
            </Link>
          ))}
          <Button href={localizedPath("/contacto", locale)} ariaLabel={t(locale, "Diagnóstico gratuito")} className="ml-2 !text-xs">
            {t(locale, "Diagnóstico")}
          </Button>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_14px_30px_rgba(15,23,42,0.1)] sm:hidden">
            <nav aria-label={t(locale, "Navegação mobile")} className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(item.href, locale)}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {t(locale, item.label)}
                </Link>
              ))}
            </nav>
            <div className="mt-3">
              <Button
                href={localizedPath("/contacto", locale)}
                ariaLabel={t(locale, "Ir para o formulário de contacto e receber diagnóstico gratuito")}
                className="w-full"
              >
                {t(locale, "Pedir diagnóstico gratuito")}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
