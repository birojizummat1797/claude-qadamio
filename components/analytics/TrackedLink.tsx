"use client";

import type { ReactNode } from "react";
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  events: readonly AnalyticsEvent[];
  props?: AnalyticsProps;
  className?: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
}

/** Plain anchor that reports click events. The href is computed on the server. */
export function TrackedLink({ href, events, props, className, children, external, ariaLabel }: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        for (const event of events) track(event, props);
      }}
    >
      {children}
    </a>
  );
}
