import type { ProblemItem } from "@/content/types";

interface ProblemGridProps {
  items: readonly ProblemItem[];
}

export function ProblemGrid({ items }: ProblemGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.question} className="flex flex-col rounded-[var(--radius-xl)] border border-line bg-paper p-6 md:p-7">
          <p className="text-xl font-bold text-midnight md:text-2xl">
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
