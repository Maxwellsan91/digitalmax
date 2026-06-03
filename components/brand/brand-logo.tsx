import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  variant?: "text" | "symbol";
  theme?: "light" | "dark";
  className?: string;
};

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 shadow-[0_10px_22px_rgba(14,116,144,0.35)]"
    >
      <span className="absolute left-[6px] bottom-[6px] h-4 w-[3px] rounded bg-white/95" />
      <span className="absolute left-[12px] bottom-[6px] h-3 w-[3px] rounded bg-white/95" />
      <span className="absolute left-[18px] bottom-[6px] h-5 w-[3px] rounded bg-white/95" />
      <span className="absolute right-[5px] top-[5px] h-[5px] w-[5px] rounded-full bg-cyan-200" />
      <span className="absolute bottom-[6px] left-[6px] h-[2px] w-[15px] rotate-[-25deg] rounded bg-cyan-100/90" />
    </span>
  );
}

function LogoText({ theme }: { theme: "light" | "dark" }) {
  const digitalmaxClass = theme === "dark" ? "text-white" : "text-slate-950";
  const digitalClass = theme === "dark" ? "text-cyan-300" : "text-cyan-700";

  return (
    <span className="inline-flex items-baseline gap-1.5 leading-none">
      <span className={`text-lg font-black tracking-tight ${digitalmaxClass}`}>DigitalMax</span>
      <span className={`text-sm font-semibold tracking-[0.08em] uppercase ${digitalClass}`}>Digital</span>
    </span>
  );
}

function BrandLogoInner({ variant, theme, className = "" }: Required<Omit<BrandLogoProps, "href">>) {
  if (variant === "text") {
    return (
      <span className={`inline-flex items-center ${className}`.trim()}>
        <LogoText theme={theme} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <LogoMark />
      <LogoText theme={theme} />
    </span>
  );
}

export function BrandLogo({ href, variant = "symbol", theme = "light", className = "" }: BrandLogoProps) {
  if (!href) {
    return <BrandLogoInner variant={variant} theme={theme} className={className} />;
  }

  return (
    <Link href={href} aria-label="DigitalMax" className="inline-flex">
      <BrandLogoInner variant={variant} theme={theme} className={className} />
    </Link>
  );
}

