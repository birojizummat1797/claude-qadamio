import { BadgeCheck, Eye, FileSearch, Lock, RefreshCw, Scale, type LucideIcon } from "lucide-react";
import type { TrustIcon, TrustItem } from "@/content/types";

const ICONS: Record<TrustIcon, LucideIcon> = {
  method: Eye,
  evidence: FileSearch,
  precision: Scale,
  privacy: Lock,
  independence: BadgeCheck,
  review: RefreshCw,
};

export function TrustCard({ icon, title, body }: TrustItem) {
  const Icon = ICONS[icon];
  return (
    <div className="h-full rounded-[var(--radius-lg)] border border-line bg-surface p-6">
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-4 text-h3 font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-fg-muted">{body}</p>
    </div>
  );
}

export function TrustGrid({ items }: { items: readonly TrustItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <TrustCard {...item} />
        </li>
      ))}
    </ul>
  );
}
