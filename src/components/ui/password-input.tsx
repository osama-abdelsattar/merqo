"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PasswordInput(props: React.ComponentProps<"input">) {
  const { useState } = React;
  const [passwordVisibility, setPasswordVisibility] = useState("hidden");
  return (
    <InputGroup>
      <InputGroupInput
        type={passwordVisibility === "shown" ? "text" : "password"}
        placeholder="Enter password"
        {...props}
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() =>
                setPasswordVisibility((prev) =>
                  prev === "hidden" ? "shown" : "hidden",
                )
              }
            >
              {passwordVisibility === "shown" ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {passwordVisibility === "shown" ? "Hide Password" : "Show Password"}
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}
