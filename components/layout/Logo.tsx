import Link from "next/link";
import { a11yLabels, site } from "@/content/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** "dark" for Midnight surfaces (footer). */
  tone?: "light" | "dark";
}

/**
 * Text wordmark + three-step mark (Clay → Mist → Blue: human → understanding → action).
 * Placeholder until a final logo exists.
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
        <rect x="2" y="14" width="6" height="8" rx="1.5" className="fill-accent" />
        <rect x="9" y="9" width="6" height="13" rx="1.5" className="fill-primary-line" />
        <rect x="16" y="2" width="6" height="20" rx="1.5" className={dark ? "fill-on-midnight-link" : "fill-primary"} />
      </svg>
      <span className="text-lg font-bold tracking-tight">{site.name}</span>
    </Link>
  );
}
