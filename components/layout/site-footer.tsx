import { t } from "@/lib/i18n";
import { type LocaleProps, localizedPath } from "@/lib/i18n/routing";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { navItems, services } from "@/lib/site-data";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const quickLinks = navItems.filter((item) => ["/", "/servicos", "/planos", "/contacto"].includes(item.href));
const serviceLinks = services.slice(0, 4).map((service) => service.title);

export function SiteFooter({ locale = "pt" }: LocaleProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <BrandLogo href={localizedPath("/", locale)} variant="text" theme="dark" />
          <p className="max-w-md text-slate-300">{t(locale, "Criamos presença online que gera clientes.")}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">{t(locale, "Links rápidos")}</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizedPath(link.href, locale)} className="transition-colors hover:text-white">
                  {t(locale, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">{t(locale, "Serviços")}</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {serviceLinks.map((service) => (
              <li key={service}>{t(locale, service)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-slate-800 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Portugal ·{" "}
          <a href="mailto:geral@digitalmax.pt" className="font-semibold text-cyan-300 hover:text-cyan-200">
            geral@digitalmax.pt
          </a>
        </p>
        <div className="flex items-center gap-3">
          <ThemeToggle locale={locale} />
          <p>© {currentYear} {t(locale, "Digital Max. Todos os direitos reservados.")}</p>
        </div>
      </div>
    </footer>
  );
}

