"use client";
import React from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import TooltipButton from "@/components/tooltip-button";
import { toast } from "sonner";

function ThemeToggle() {
  const { useState, useEffect } = React;

  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <TooltipButton
      tooltipText="Toggle theme"
      variant="outline"
      size="icon-lg"
      className="relative group overflow-hidden"
      onClick={() => {
        if (!mounted) return;
        toast.info(`Theme changed to: ${isDark ? "Light" : "Dark"}`);
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <SunIcon className="absolute size-5 rotate-0 scale-100 transition-all! duration-300! dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all! duration-300! dark:rotate-0 dark:scale-100" />
      {/* <span className="sr-only">Toggle theme</span> */}
    </TooltipButton>
  );
}

export default ThemeToggle;
