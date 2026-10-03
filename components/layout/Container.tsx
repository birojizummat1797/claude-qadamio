import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  /** "content" = 1200px page width, "prose" = 720px reading width. */
  width?: "content" | "prose";
  className?: string;
}

/** Horizontal page frame. Gutters: 16px (mobile), 24px (sm), 32px (lg). */
export function Container({ children, width = "content", className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        width === "content" ? "max-w-content" : "max-w-prose",
        className,
      )}
    >
      {children}
    </div>
  );
}
