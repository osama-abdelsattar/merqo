"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ToggleButtonProps extends React.ComponentProps<typeof Button> {
  tooltipText: string;
}

export default function TooltipButton({
  children,
  tooltipText,
  ...props
}: ToggleButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button {...props}>{children}</Button>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
}
