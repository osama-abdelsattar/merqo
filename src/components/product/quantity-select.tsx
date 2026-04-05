"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";

export default function QuantitySelect({
  availableQuantity,
}: {
  availableQuantity: number;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <InputGroup className="w-fit border-foreground/15">
      <InputGroupAddon align="inline-start">
        <InputGroupButton
          size="icon-sm"
          onClick={() => setQuantity(quantity - 1)}
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
        onChange={(e) => setQuantity(Number(e.currentTarget.value))}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-sm"
          onClick={() => setQuantity(quantity + 1)}
        >
          <PlusIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
