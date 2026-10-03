import Link from "next/link";
import { a11yLabels, site } from "@/content/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** "dark" for Midnight surfaces (footer). */
  tone?: "light" | "dark";
}

/**
 * Text wordmark + step mark. Identity stays Midnight + Qadam Blue; Mist is the
 * light variant for dark surfaces. Clay and Spark are never logo colors.
 * Placeholder until the separate logo review (PM decision 2026-10-03).
 */
export function Logo({ tone = "light" }: LogoProps) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      aria-label={a11yLabels.home}
      className={cn("inline-flex min-h-11 items-center gap-2", dark ? "text-on-midnight" : "text-midnight")}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
        <rect x="2" y="14" width="6" height="8" rx="1.5" fill="currentColor" opacity="0.3" />
        <rect x="9" y="9" width="6" height="13" rx="1.5" fill="currentColor" opacity="0.6" />
        <rect x="16" y="2" width="6" height="20" rx="1.5" className={dark ? "fill-primary-soft" : "fill-primary"} />
      </svg>
      <span className="text-lg font-bold tracking-tight">{site.name}</span>
    </Link>
  );
}
