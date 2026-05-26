"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import * as React from "react";
import { cn } from "@/lib/utils";

function QuantitySelect({
  availableQuantity,
  showAvailable,
  className,
}: {
  availableQuantity: number;
  showAvailable?: boolean;
  className?: string;
}) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <InputGroup className="w-fit border-foreground/15">
        <InputGroupAddon align="inline-start">
          <InputGroupButton
            size="icon-sm"
            aria-label="Decrease quantity"
            onClick={() => {
              if (quantity - 1 >= 0) setQuantity(quantity - 1);
            }}
          >
            <MinusIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput
          type="number"
          aria-label="Quantity"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
          value={quantity}
          min={1}
          max={availableQuantity}
          onChange={(e) => {
            const value = Number(e.currentTarget.value);
            if (value > availableQuantity) return;
            else setQuantity(value);
          }}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-sm"
            aria-label="Increase quantity"
            onClick={() => {
              if (quantity + 1 <= availableQuantity) setQuantity(quantity + 1);
            }}
          >
            <PlusIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      {showAvailable && (
        <span className="text-muted-foreground text-sm">
          {availableQuantity} available
        </span>
      )}
    </div>
  );
}

export default QuantitySelect;
