"use client";

import { Toaster } from "@/components/ui/sonner";
import { useBreakpoint } from "@/hooks/use-breakpoint.hook";

/**
 * Isolated component for the toast notification system.
 * By isolating `useBreakpoint` here instead of in `AppProviders`,
 * breakpoint changes only re-render this component — not the entire app tree.
 */
function AppToaster() {
  const isSm = useBreakpoint("sm");

  return (
    <Toaster
      position={isSm ? "bottom-center" : "top-center"}
      duration={1000 * 4}
      closeButton
    />
  );
}

export { AppToaster };
