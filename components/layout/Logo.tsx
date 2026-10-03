import Link from "next/link";
import { a11yLabels, site } from "@/content/site";

/** Text wordmark + step mark. Placeholder until a final logo exists. */
export function Logo() {
  return (
    <Link href="/" aria-label={a11yLabels.home} className="inline-flex min-h-11 items-center gap-2 text-ink">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
        <rect x="2" y="14" width="6" height="8" rx="1.5" fill="currentColor" opacity="0.35" />
        <rect x="9" y="9" width="6" height="13" rx="1.5" fill="currentColor" opacity="0.6" />
        <rect x="16" y="2" width="6" height="20" rx="1.5" className="fill-green" />
      </svg>
      <span className="text-lg font-bold tracking-tight">{site.name}</span>
    </Link>
  );
}
