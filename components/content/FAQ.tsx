"use client";

import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/types";
import { track } from "@/lib/analytics";

interface FAQProps {
  items: readonly FaqItem[];
  /** Analytics placement, e.g. "home" or "faq". */
  source: string;
}

/** Accordion on native <details>: keyboard and screen-reader support for free. */
export function FAQ({ items, source }: FAQProps) {
  return (
    <div className="divide-y divide-line rounded-[var(--radius-lg)] border border-line bg-surface">
      {items.map((item) => (
        <details
          key={item.id}
          id={`faq-${item.id}`}
          className="group"
          onToggle={(event) => {
            if (event.currentTarget.open) track("faq_expand", { source, item: item.id });
          }}
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink md:px-6 [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="px-5 pb-5 text-ink-2 md:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
