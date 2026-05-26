"use client";

import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToggleButtonProps extends React.ComponentProps<typeof Toggle> {
  tooltipText: string;
}

function ToggleButton({ children, tooltipText, ...props }: ToggleButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle aria-label={props["aria-label"] ?? tooltipText} {...props}>
          {children}
        </Toggle>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
}

export default ToggleButton;
