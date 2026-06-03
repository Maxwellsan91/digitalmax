import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

export function CtaButton({ href, children, variant = "primary", className = "", ariaLabel }: CtaButtonProps) {
  return (
    <Button href={href} variant={variant} className={className} ariaLabel={ariaLabel}>
      {children}
    </Button>
  );
}
