"use client";

import { useSyncExternalStore, useMemo } from "react";
import { BREAKPOINTS } from "@/constants/breakpoints.constant";

type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Orchestrates a synchronized subscription to a CSS media query.
 * Prevents UI 'tearing' in Concurrent React and ensures hydration consistency in Next.js.
 */
function useMediaQuery(query: string): boolean {
  const { subscribe, getSnapshot } = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        subscribe: () => () => {},
        getSnapshot: () => false,
      };
    }

    const mql = window.matchMedia(query);

    return {
      subscribe: (callback: () => void) => {
        mql.addEventListener("change", callback);
        return () => mql.removeEventListener("change", callback);
      },
      getSnapshot: () => mql.matches,
    };
  }, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/**
 * Returns a boolean indicating if the viewport is currently below a defined breakpoint.
 * Dynamically constructs the query using your project's central BREAKPOINTS configuration.
 */
function useBreakpoint(key: BreakpointKey): boolean {
  const query = useMemo(() => `(max-width: ${BREAKPOINTS[key] - 1}px)`, [key]);
  return useMediaQuery(query);
}

export { useBreakpoint };
