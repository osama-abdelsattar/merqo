"use client";

import { HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { Toggle, toggleVariants } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Toggle as TogglePrimitive } from "radix-ui";
import { VariantProps } from "class-variance-authority";

export default function WishlistButton(
  props: React.ComponentProps<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>,
) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          onPressedChange={(pressed) =>
            toast.info(pressed ? "Added to wishlist" : "Removed from wishlist")
          }
          variant="outline"
          className="h-fit p-3 rounded-full cursor-pointer"
          {...props}
        >
          <HeartIcon className="group-aria-pressed/toggle:fill-foreground" />
        </Toggle>
      </TooltipTrigger>
      <TooltipContent>Wishlist</TooltipContent>
    </Tooltip>
  );
}
