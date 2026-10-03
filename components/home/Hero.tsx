import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { DiagnosticCTA } from "@/components/cta/DiagnosticCTA";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/ui/Button";
import type { HeroChip } from "@/content/types";
import { buildTelegramUrl, CTA_SOURCES } from "@/lib/telegram";

interface HeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  /** Substring of titleLine2 shown in Qadam Blue; the rest stays Midnight. */
  titleHighlight?: string;
  lead: string;
  secondaryLabel: string;
  secondaryHref: string;
  ctaNote: string;
  entryLabel: string;
  chips: readonly HeroChip[];
}

export function splitHighlight(text: string, highlight?: string): [string, string, string] {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || at < 0) return [text, "", ""];
  return [text.slice(0, at), highlight, text.slice(at + highlight.length)];
}

/**
 * Centered launch-style hero inside a large rounded stage: badge, heavy headline,
 * "which question is yours?" chips (each starts the diagnostic) and the CTAs.
 */
export function Hero({
  eyebrow,
  titleLine1,
  titleLine2,
  titleHighlight,
  lead,
  secondaryLabel,
  secondaryHref,
  ctaNote,
  entryLabel,
  chips,
}: HeroProps) {
  const [before, highlight, after] = splitHighlight(titleLine2, titleHighlight);
  const chipHref = buildTelegramUrl({ source: "hero" });

  return (
    <section aria-labelledby="hero-title" className="bg-paper pt-3 pb-10 md:pt-6 md:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface bg-[radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:22px_22px] px-5 pt-8 pb-10 text-center md:px-12 md:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-line bg-primary-soft py-1 pr-4 pl-4 text-xs font-medium text-midnight sm:pl-1 sm:text-sm">
            <span className="hidden rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-on-primary sm:inline">Qadam</span>
            {eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mx-auto mt-5 max-w-5xl text-display font-extrabold text-balance text-midnight sm:text-[2.75rem] md:text-display-lg"
          >
            {titleLine1} {before}
            {highlight && <span className="text-primary">{highlight}</span>}
            {after}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-fg-muted md:mt-6 md:text-xl">{lead}</p>

          {/* Phones: CTA first so it stays above the fold; desktop: chips first (search-like entry). */}
          <div className="flex flex-col">
            <div className="order-2 mt-8 md:order-1 md:mt-10">
              <p className="text-sm font-semibold text-midnight">{entryLabel}</p>
              <ul className="mx-auto mt-3 flex max-w-3xl flex-wrap justify-center gap-2">
                {chips.map((chip) => (
                  <li key={chip.id}>
                    <TrackedLink
                      href={chipHref}
                      external
                      events={["hero_cta_click", "diagnostic_cta_click", "telegram_redirect"]}
                      props={{ source: CTA_SOURCES.hero, item: chip.id }}
                      className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-[15px] font-medium text-fg transition-colors hover:border-primary hover:text-primary"
                    >
                      {chip.label}
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 mt-6 md:order-2 md:mt-8">
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <DiagnosticCTA source="hero" size="lg" />
                <Link href={secondaryHref} className={buttonClasses({ variant: "secondary", size: "lg" })}>
                  {secondaryLabel}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-fg-muted">{ctaNote}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
