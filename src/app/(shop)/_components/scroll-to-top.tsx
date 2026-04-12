"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Resets window scroll whenever the route changes.
 */
function ScrollToTop() {
  const pathname = usePathname();
  const skipNextScrollRef = useRef(false);

  useEffect(() => {
    // Keep browser/Next scroll restoration behavior for back/forward.
    window.history.scrollRestoration = "auto";

    const onPopState = () => {
      // When the user goes back/forward, we should not force scroll-to-top.
      skipNextScrollRef.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    if (skipNextScrollRef.current) {
      skipNextScrollRef.current = false;
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
