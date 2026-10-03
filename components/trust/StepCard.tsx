import type { ProcessStep } from "@/content/types";

interface StepCardProps extends ProcessStep {
  index: number;
}

export function StepCard({ index, title, body }: StepCardProps) {
  return (
    <div className="h-full rounded-[var(--radius-xl)] border border-line bg-surface p-6 md:p-7">
      <p aria-hidden="true" className="text-5xl leading-none font-extrabold tracking-tight tabular-nums text-primary">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-6 text-h3 font-bold text-midnight">{title}</h3>
      <p className="mt-2 text-fg-muted">{body}</p>
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
