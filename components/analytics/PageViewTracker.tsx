"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Emits page_view on first load and on every client-side navigation. Path only, no query string. */
export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) track("page_view", { source: pathname });
  }, [pathname]);

  return null;
}
