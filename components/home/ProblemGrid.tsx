import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ctaLabels } from "@/content/site";
import type { ProblemItem } from "@/content/types";
import { buildTelegramUrl, CTA_SOURCES } from "@/lib/telegram";

interface ProblemGridProps {
  items: readonly ProblemItem[];
  /** Secondary discovery link label (PM decision D-1). */
  startLabel: string;
}

/** Real user questions; each card is a quiet, secondary way into the diagnostic. */
export function ProblemGrid({ items, startLabel }: ProblemGridProps) {
  const href = buildTelegramUrl({ source: "problems" });

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id} className="flex flex-col rounded-[var(--radius-xl)] border border-line bg-paper p-6 md:p-7">
          <p className="text-xl font-semibold text-midnight md:text-[22px] md:leading-snug">
            <span aria-hidden="true" className="text-accent">“</span>
            {item.question}
            <span aria-hidden="true" className="text-accent">”</span>
          </p>
          <p className="mt-3 flex-1 text-fg-muted">{item.answer}</p>
          <TrackedLink
            href={href}
            external
            events={["diagnostic_cta_click", "telegram_redirect"]}
            props={{ source: CTA_SOURCES.problems, item: item.id }}
            className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-primary hover:text-primary-hover"
          >
            {startLabel}
            <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only">({ctaLabels.opensTelegram})</span>
          </TrackedLink>
        </li>
      ))}
    </ul>
  );
}
