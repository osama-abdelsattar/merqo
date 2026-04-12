"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldConfig {
  label: string;
  placeholder: string;
  autoComplete?: string;
}

interface PhoneInputFieldProps extends Omit<
  React.ComponentProps<typeof FormItem>,
  "name"
> {
  name: string;
  config: FormFieldConfig;
  labelRight?: React.ReactNode;
  autoComplete?: string;
}

function PhoneInputField({
  name,
  config,
  labelRight,
  autoComplete,
  className,
  ...props
}: PhoneInputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("gap-2", className)} {...props}>
          <div className="flex items-center justify-between">
            <FormLabel className="pointer-events-none">
              {config.label}
            </FormLabel>
            {labelRight ? labelRight : null}
          </div>

          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>+2</InputGroupText>
            </InputGroupAddon>
            <FormControl>
              <InputGroupInput
                {...field}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  field.onChange(value);
                }}
                maxLength={11}
                placeholder={config.placeholder}
                autoComplete={autoComplete || config.autoComplete}
              />
            </FormControl>
          </InputGroup>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default PhoneInputField;
