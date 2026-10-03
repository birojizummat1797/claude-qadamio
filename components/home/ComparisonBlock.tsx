import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ComparisonRow } from "@/content/types";

interface ComparisonBlockProps {
  /** "primary" when placed on the full-bleed Qadam Blue section. */
  tone?: "light" | "primary";
  chain: readonly string[];
  columns: { common: string; qadam: string };
  rows: readonly ComparisonRow[];
}

/** Neutral approach comparison — describes approaches, never names or attacks anyone. */
export function ComparisonBlock({ chain, columns, rows, tone = "light" }: ComparisonBlockProps) {
  const onBlue = tone === "primary";
  return (
    <div className="space-y-8">
      <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
        {chain.map((item, i) => (
          <li key={item} className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-semibold",
                onBlue ? "bg-surface text-midnight" : "border border-primary-line bg-primary-soft text-fg",
              )}
            >
              {item}
            </span>
            {i < chain.length - 1 && (
              <ChevronRight aria-hidden="true" className={cn("hidden size-4 shrink-0 md:block", onBlue ? "text-on-primary" : "text-primary")} />
            )}
          </li>
        ))}
      </ol>

      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface text-fg">
        <div className="hidden grid-cols-2 border-b border-line bg-paper md:grid" aria-hidden="true">
          <p className="px-6 py-3 text-sm font-semibold text-fg-muted">{columns.common}</p>
          <p className="border-l border-line px-6 py-3 text-sm font-semibold text-primary">{columns.qadam}</p>
        </div>
        <dl className="divide-y divide-line">
          {rows.map((row) => (
            <div key={row.common} className="grid md:grid-cols-2">
              <dt className="px-6 pt-5 text-fg-muted md:py-5">
                <span className="mb-1 block text-xs font-semibold text-fg-muted md:hidden">{columns.common}</span>
                {row.common}
              </dt>
              <dd className="px-6 pt-3 pb-5 font-medium text-fg md:border-l md:border-line md:py-5">
                <span className="mb-1 block text-xs font-semibold text-primary md:hidden">{columns.qadam}</span>
                {row.qadam}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
