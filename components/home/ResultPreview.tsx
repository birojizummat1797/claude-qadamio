import { Compass, Gauge, HelpCircle } from "lucide-react";
import type { ResultPreviewData, SignalLevel } from "@/content/types";
import { cn } from "@/lib/cn";

const LEVEL_STYLES: Record<SignalLevel, string> = {
  strong: "bg-primary text-on-primary",
  medium: "bg-primary-soft text-primary",
  unknown: "border border-dashed border-line-strong text-fg-muted",
};

/**
 * Product showcase: what a Qadam result looks like, as a static app window.
 * Clearly labelled as a sample; qualitative levels only (no scores, no %).
 */
export function ResultPreview({ data }: { data: ResultPreviewData }) {
  return (
    <figure aria-label={data.sampleBadge} className="space-y-4">
      <div className="overflow-hidden rounded-[var(--radius-xl)] bg-surface text-fg shadow-[0_24px_80px_rgb(0_0_0/0.35)]">
        {/* Window bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3 md:px-6">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0">
            <rect x="2" y="14" width="6" height="8" rx="1.5" className="fill-midnight" opacity="0.3" />
            <rect x="9" y="9" width="6" height="13" rx="1.5" className="fill-midnight" opacity="0.6" />
            <rect x="16" y="2" width="6" height="20" rx="1.5" className="fill-primary" />
          </svg>
          <ul aria-hidden="true" className="flex flex-wrap gap-1">
            {data.tabs.map((tab, i) => (
              <li
                key={tab}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium",
                  i === 0 ? "bg-primary-soft text-primary" : "text-fg-muted",
                )}
              >
                {tab}
              </li>
            ))}
          </ul>
          <span className="ml-auto rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold tracking-wide text-midnight uppercase">
            {data.sampleBadge}
          </span>
        </div>

        <div className="grid gap-px bg-line lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          {/* Signals */}
          <div className="bg-surface p-5 md:p-6">
            <p className="text-sm font-semibold text-midnight">{data.signalsTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {data.signals.map((signal) => (
                <li key={signal.label} className="flex items-center justify-between gap-3">
                  <span className="text-[15px] text-fg">{signal.label}</span>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                      LEVEL_STYLES[signal.level],
                    )}
                  >
                    {signal.level === "unknown" && <HelpCircle aria-hidden="true" className="size-3.5" />}
                    {data.levelLabels[signal.level]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Directions */}
          <div className="bg-paper p-5 md:p-6">
            <p className="text-sm font-semibold text-midnight">{data.directionsTitle}</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {data.directions.map((direction) => (
                <li key={direction.title} className="rounded-[var(--radius-lg)] border border-line bg-surface p-4">
                  <p className="flex items-center gap-2 text-lg font-bold text-midnight">
                    <Compass aria-hidden="true" className="size-5 text-primary" />
                    {direction.title}
                  </p>
                  <p className="mt-3 text-xs font-semibold tracking-wide text-primary uppercase">{data.whyLabel}</p>
                  <p className="mt-1 text-sm text-fg">{direction.why}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-fg-muted">
                    <Gauge aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                    {direction.readiness}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-start gap-3 rounded-[var(--radius-lg)] bg-midnight p-4 text-on-midnight">
              <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-spark ring-4 ring-spark/25" />
              <p className="text-sm">
                <span className="font-semibold">{data.nextStep.label}:</span>{" "}
                <span className="text-on-midnight-muted">{data.nextStep.text}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-sm text-on-midnight-muted">{data.sampleNote}</figcaption>
    </figure>
  );
}
