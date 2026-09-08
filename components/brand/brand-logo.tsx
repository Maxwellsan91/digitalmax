import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  variant?: "text" | "symbol";
  theme?: "light" | "dark";
  className?: string;
};

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 drop-shadow-[0_4px_14px_rgba(14,116,144,0.45)]"
    >
      <defs>
        <linearGradient id="dm-g" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="0.44" stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="34" height="34" rx="9" fill="url(#dm-g)" />
      {/* Top glass highlight */}
      <rect width="34" height="17" rx="9" fill="white" fillOpacity="0.09" />
      {/* Inner border */}
      <rect width="34" height="34" rx="9" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="0.75" />
      {/* Ascending bars — baseline at y=30 */}
      <rect x="5"  y="21" width="6" height="9"  rx="1.5" fill="white" fillOpacity="0.46" />
      <rect x="14" y="15" width="6" height="15" rx="1.5" fill="white" fillOpacity="0.74" />
      <rect x="23" y="9"  width="6" height="21" rx="1.5" fill="white" />
      {/* Trend line */}
      <polyline
        points="8,21 17,15 26,9"
        stroke="white" strokeOpacity="0.38" strokeWidth="1.3"
        fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Peak glow */}
      <circle cx="26" cy="6.5" r="3.5" fill="#BAE6FD" fillOpacity="0.3" />
      {/* Peak dot */}
      <circle cx="26" cy="6.5" r="2.2" fill="#BAE6FD" fillOpacity="0.85" />
      <circle cx="26" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}

function LogoText({ theme }: { theme: "light" | "dark" }) {
  const baseClass = theme === "dark" ? "text-white" : "text-slate-950";
  const accentClass = theme === "dark" ? "text-cyan-300" : "text-cyan-600";

  return (
    <span className="inline-flex items-baseline leading-none">
      <span className={`text-[17px] font-black tracking-tight ${baseClass}`}>Digital</span>
      <span className={`text-[17px] font-black tracking-tight ${accentClass}`}>Max</span>
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
    <Link href={href} aria-label="Digital Max" className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2">
      <BrandLogoInner variant={variant} theme={theme} className={className} />
    </Link>
  );
}
