"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
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
      <div className="mx-auto w-full max-w-6xl px-6 py-3.5">
        <div className="flex items-center justify-between gap-3">
          <BrandLogo href="/" variant="symbol" className="shrink-0" />

          <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button href="/contacto" ariaLabel="Ir para o formulário de contacto e receber diagnóstico gratuito">
              Pedir diagnóstico
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Link
              href="/contacto"
              className="inline-flex min-h-[40px] items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 sm:hidden"
            >
              Diagnóstico
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contacto" ariaLabel="Diagnóstico gratuito" className="ml-2 !text-xs">
            Diagnóstico
          </Button>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_14px_30px_rgba(15,23,42,0.1)] sm:hidden">
            <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3">
              <Button
                href="/contacto"
                ariaLabel="Ir para o formulário de contacto e receber diagnóstico gratuito"
                className="w-full"
              >
                Pedir diagnóstico gratuito
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
