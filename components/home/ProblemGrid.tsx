import type { ProblemItem } from "@/content/types";

interface ProblemGridProps {
  items: readonly ProblemItem[];
}

export function ProblemGrid({ items }: ProblemGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.question} className="flex flex-col rounded-[var(--radius-lg)] border border-line bg-surface p-6">
          <p className="text-h3 font-semibold text-midnight">
            <span aria-hidden="true" className="text-accent">“</span>
            {item.question}
            <span aria-hidden="true" className="text-accent">”</span>
          </p>
          <p className="mt-3 text-fg-muted">{item.answer}</p>
        </li>
      ))}
    </ul>
  );
}
