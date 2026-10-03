import { ChevronRight } from "lucide-react";
import type { ComparisonRow } from "@/content/types";

interface ComparisonBlockProps {
  chain: readonly string[];
  columns: { common: string; qadam: string };
  rows: readonly ComparisonRow[];
}

/** Neutral approach comparison — describes approaches, never names or attacks anyone. */
export function ComparisonBlock({ chain, columns, rows }: ComparisonBlockProps) {
  return (
    <div className="space-y-8">
      <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
        {chain.map((item, i) => (
          <li key={item} className="flex items-center gap-2">
            <span className="inline-flex min-h-10 items-center rounded-full border border-green/30 bg-green-soft px-4 text-[15px] font-medium text-ink">
              {item}
            </span>
            {i < chain.length - 1 && (
              <ChevronRight aria-hidden="true" className="hidden size-4 shrink-0 text-green md:block" />
            )}
          </li>
        ))}
      </ol>

      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface">
        <div className="hidden grid-cols-2 border-b border-line bg-paper md:grid" aria-hidden="true">
          <p className="px-6 py-3 text-sm font-semibold text-ink-3">{columns.common}</p>
          <p className="border-l border-line px-6 py-3 text-sm font-semibold text-green">{columns.qadam}</p>
        </div>
        <dl className="divide-y divide-line">
          {rows.map((row) => (
            <div key={row.common} className="grid md:grid-cols-2">
              <dt className="px-6 pt-5 text-ink-2 md:py-5">
                <span className="mb-1 block text-xs font-semibold text-ink-3 md:hidden">{columns.common}</span>
                {row.common}
              </dt>
              <dd className="px-6 pt-3 pb-5 font-medium text-ink md:border-l md:border-line md:py-5">
                <span className="mb-1 block text-xs font-semibold text-green md:hidden">{columns.qadam}</span>
                {row.qadam}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
