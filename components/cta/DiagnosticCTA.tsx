import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn } from "@/lib/cn";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { ctaLabels } from "@/content/site";
import type { AnalyticsEvent } from "@/lib/analytics";
import { buildTelegramUrl, CTA_SOURCES, type CareerRef, type CtaSource } from "@/lib/telegram";

interface DiagnosticCTAProps {
  source: CtaSource;
  career?: CareerRef;
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

/**
 * The single entry point to the diagnostic. Today it opens the Telegram bot;
 * in Phase 2 it can point to a web diagnostic by changing this component only.
 */
export function DiagnosticCTA({
  source,
  career,
  label = ctaLabels.primary,
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: DiagnosticCTAProps) {
  const href = buildTelegramUrl({ source, career });
  const events: AnalyticsEvent[] =
    source === "hero"
      ? ["hero_cta_click", "diagnostic_cta_click", "telegram_redirect"]
      : ["diagnostic_cta_click", "telegram_redirect"];
  const slug = career?.status === "active" ? career.slug : undefined;

  return (
    <TrackedLink
      href={href}
      external
      events={events}
      props={{ source: CTA_SOURCES[source], slug }}
      className={buttonClasses({
        variant,
        size,
        fullWidth,
        // Arrow sits in its own circle at the right edge of the pill.
        className: cn(size === "lg" ? "gap-4 pr-2" : "gap-3 pr-1.5", className),
      })}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full",
          size === "lg" ? "size-10" : "size-8",
          variant === "inverse" ? "bg-primary text-on-primary" : "bg-on-primary text-primary",
        )}
      >
        <ArrowUpRight className="size-4" />
      </span>
      <span className="sr-only">({ctaLabels.opensTelegram})</span>
    </TrackedLink>
  );
}
