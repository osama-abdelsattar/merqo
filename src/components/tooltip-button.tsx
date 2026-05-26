"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToggleButtonProps extends React.ComponentProps<typeof Button> {
  tooltipText: string;
}

function TooltipButton({ children, tooltipText, ...props }: ToggleButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button aria-label={props["aria-label"] ?? tooltipText} {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
}

export default TooltipButton;
