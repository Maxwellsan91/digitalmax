import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

export function Button({ href, children, variant = "primary", className = "", ariaLabel }: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2";
  const variantClasses = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <Link href={href} aria-label={ariaLabel} className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {children}
    </Link>
  );
}

