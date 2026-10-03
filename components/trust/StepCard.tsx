import type { ProcessStep } from "@/content/types";

interface StepCardProps extends ProcessStep {
  index: number;
}

export function StepCard({ index, title, body }: StepCardProps) {
  return (
    <div className="h-full rounded-[var(--radius-lg)] border border-line bg-surface p-6">
      <p aria-hidden="true" className="text-sm font-semibold tabular-nums text-green">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-h3 font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-ink-2">{body}</p>
    </div>
  );
}

interface StepListProps {
  steps: readonly ProcessStep[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title}>
          <StepCard index={i + 1} {...step} />
        </li>
      ))}
    </ol>
  );
}
