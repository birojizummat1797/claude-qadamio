import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold " +
  "transition-colors duration-150 select-none whitespace-nowrap " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-hover",
  secondary: "border border-line-strong bg-surface text-fg hover:border-fg",
  ghost: "text-fg hover:bg-primary-soft",
};

const sizes: Record<ButtonSize, string> = {
  // 44px minimum touch target.
  md: "min-h-11 px-4 text-[15px]",
  lg: "min-h-12 px-6 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

/** Internal navigation styled as a button. External links use DiagnosticCTA or a plain <a>. */
export function ButtonLink({ href, children, ...style }: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClasses(style)}>
      {children}
    </Link>
  );
}
