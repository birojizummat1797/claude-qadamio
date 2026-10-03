import { ArrowLeftRight, ArrowRight, ArrowUpRight, Sprout, TrendingUp, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/ui/Button";
import { ctaLabels } from "@/content/site";
import type { SituationCard, SituationIcon } from "@/content/types";
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
  situations: readonly SituationCard[];
  situationAction: string;
}

const ICONS: Record<SituationIcon, LucideIcon> = {
  start: Sprout,
  switch: ArrowLeftRight,
  grow: TrendingUp,
};

// Dot-grid texture as an SVG pattern (Design DNA: no gradients anywhere).
const DOT_GRID =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e3dfd7'/%3E%3C/svg%3E\")";

export function splitHighlight(text: string, highlight?: string): [string, string, string] {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || at < 0) return [text, "", ""];
  return [text.slice(0, at), highlight, text.slice(at + highlight.length)];
}

/**
 * Human-first hero: the primary interaction is "which situation are you in?"
 * (three cards). Each card starts the free diagnostic in Telegram.
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
  situations,
  situationAction,
}: HeroProps) {
  const [before, highlight, after] = splitHighlight(titleLine2, titleHighlight);

  return (
    <section aria-labelledby="hero-title" className="bg-paper pt-3 pb-10 md:pt-6 md:pb-16">
      <Container>
        <div
          className="rounded-[var(--radius-xl)] border border-line bg-surface px-4 pt-6 pb-6 text-center sm:px-5 md:px-12 md:pt-16 md:pb-12"
          style={{ backgroundImage: DOT_GRID }}
        >
          {/* Category badge is hidden on the narrowest phones so the first situation card sits comfortably in view (PM item P2). */}
          <p className="inline-flex items-center rounded-full border border-primary-line bg-primary-soft px-4 py-1 text-xs font-medium text-midnight max-[380px]:hidden sm:text-sm">
            {eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mx-auto mt-4 max-w-5xl text-display max-[380px]:mt-0 font-extrabold text-balance text-midnight max-[359px]:text-[2rem] sm:text-[2.75rem] md:text-display-lg"
          >
            {titleLine1} {before}
            {highlight && <span className="text-primary">{highlight}</span>}
            {after}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-fg-muted sm:text-base md:mt-6 md:text-xl">{lead}</p>

          <h2 className="mt-6 text-sm font-semibold text-midnight md:mt-12">{entryLabel}</h2>
          <ul className="mx-auto mt-3 grid max-w-5xl gap-2.5 text-left sm:grid-cols-3 md:mt-4 md:gap-4">
            {situations.map((situation) => {
              const Icon = ICONS[situation.icon];
              return (
                <li key={situation.id}>
                  <TrackedLink
                    href={buildTelegramUrl({ source: "hero", state: situation.state })}
                    external
                    events={["hero_cta_click", "diagnostic_cta_click", "telegram_redirect"]}
                    props={{ source: CTA_SOURCES.hero, item: situation.id }}
                    className="group flex h-full items-center gap-3 rounded-[var(--radius-lg)] border border-line bg-surface px-4 py-3 transition-colors hover:border-primary sm:flex-col sm:items-start sm:gap-4 sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary sm:size-12"
                    >
                      <Icon className="size-5 sm:size-6" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-lg font-bold text-midnight sm:text-xl">{situation.title}</span>
                      <span className="mt-0.5 text-sm leading-snug text-fg-muted sm:mt-1 sm:text-[15px]">{situation.body}</span>
                      <span className="mt-3 hidden items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-hover sm:inline-flex">
                        {situationAction}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-primary sm:hidden" />
                    <span className="sr-only">({ctaLabels.opensTelegram})</span>
                  </TrackedLink>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 md:mt-8">
            <Link href={secondaryHref} className={buttonClasses({ variant: "ghost", size: "md" })}>
              {secondaryLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <p className="text-sm text-fg-muted">{ctaNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
