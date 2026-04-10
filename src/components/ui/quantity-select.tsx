"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function QuantitySelect({
  availableQuantity,
  className,
}: {
  availableQuantity: number;
  className?: string;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <InputGroup className={cn("w-fit border-foreground/15", className)}>
      <InputGroupAddon align="inline-start">
        <InputGroupButton
          size="icon-sm"
          onClick={() => {
            if (quantity - 1 >= 0) setQuantity(quantity - 1);
          }}
        >
          <MinusIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput
        type="number"
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
          onClick={() => {
            if (quantity + 1 <= availableQuantity) setQuantity(quantity + 1);
          }}
        >
          <PlusIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
