"use client";
import React from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { upperCaseFirstLetter } from "@/lib/text";

export default function ThemeToggle({
  tooltipText,
}: {
  tooltipText?: "label" | "theme";
}) {
  const { useState, useEffect } = React;

  const { setTheme, resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          className="relative group rounded-full overflow-hidden"
          onClick={() => {
            if (!mounted) return;
            setTheme(isDark ? "light" : "dark");
          }}
        >
          <SunIcon className="absolute size-5 rotate-0 scale-100 transition-all! duration-300! dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all! duration-300! dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {mounted && tooltipText === "theme"
          ? theme && upperCaseFirstLetter(theme)
          : "Toggle theme"}
      </TooltipContent>
    </Tooltip>
  );
}
