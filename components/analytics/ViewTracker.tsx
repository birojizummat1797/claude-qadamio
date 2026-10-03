"use client";

import { useEffect, useRef } from "react";
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics";

interface ViewTrackerProps {
  event: AnalyticsEvent;
  props?: AnalyticsProps;
}

/**
 * Invisible marker: fires `event` once when it scrolls into view.
 * Place it inside the section to measure.
 */
export function ViewTracker({ event, props }: ViewTrackerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const propsRef = useRef(props);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track(event, propsRef.current);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [event]);

  return <span ref={ref} aria-hidden="true" className="block h-px w-px" />;
}
