import type { JourneyStep } from "@/content/types";
import { cn } from "@/lib/cn";

interface JourneyVisualProps {
  label: string;
  steps: readonly JourneyStep[];
}

// Rising step heights on desktop: the journey literally climbs, like the logo.
const STAIR_HEIGHTS = ["lg:min-h-[150px]", "lg:min-h-[178px]", "lg:min-h-[206px]", "lg:min-h-[234px]", "lg:min-h-[262px]", "lg:min-h-[290px]"];

/**
 * The Qadam journey as an ordered list. Mobile/tablet: vertical timeline.
 * Desktop: ascending staircase. Pure CSS, no charts, no fake data.
 */
export function JourneyVisual({ label, steps }: JourneyVisualProps) {
  const last = steps.length - 1;

  return (
    <figure aria-label={label} className="rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-card)] md:p-8">
      <figcaption className="mb-5 text-sm font-semibold text-ink-3 lg:mb-6">{label}</figcaption>
      <ol className="relative grid gap-0 lg:grid-cols-6 lg:items-end lg:gap-3">
        {steps.map((step, i) => {
          const isLast = i === last;
          return (
            <li key={step.question} className="relative flex gap-4 pb-6 last:pb-0 lg:block lg:pb-0">
              {/* Mobile rail */}
              {!isLast && <span aria-hidden="true" className="absolute top-8 bottom-0 left-[15px] w-px bg-line-strong lg:hidden" />}
              <span
                aria-hidden="true"
                className={cn(
                  "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold lg:hidden",
                  isLast ? "bg-green text-on-green" : "border border-line-strong bg-surface text-ink-2",
                )}
              >
                {i + 1}
              </span>

              <div
                className={cn(
                  "pt-1 lg:flex lg:flex-col lg:justify-start lg:rounded-[var(--radius-md)] lg:p-4 lg:pt-4",
                  STAIR_HEIGHTS[i] ?? STAIR_HEIGHTS[STAIR_HEIGHTS.length - 1],
                  isLast ? "lg:bg-green lg:text-on-green" : "lg:border lg:border-line lg:bg-paper",
                )}
              >
                <span aria-hidden="true" className={cn("hidden text-xs font-semibold lg:block", isLast ? "text-on-green/80" : "text-ink-3")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={cn("font-semibold text-ink lg:mt-2 lg:text-[17px] lg:leading-snug", isLast && "lg:text-on-green")}>
                  {step.question}
                </p>
                <p className={cn("mt-1 text-sm text-ink-2", isLast && "lg:text-on-green/85")}>{step.caption}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
