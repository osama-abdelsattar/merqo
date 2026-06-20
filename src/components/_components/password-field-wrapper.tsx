"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PasswordInput from "@/components/common/password-input";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldConfig {
  label: string;
  placeholder: string;
  autoComplete?: string;
}

interface PasswordFieldWrapperProps extends Omit<
  React.ComponentProps<typeof FormItem>,
  "name"
> {
  name: string;
  config: FormFieldConfig;
  labelRight?: React.ReactNode;
  autoComplete?: string;
}

function PasswordFieldWrapper({
  name,
  config,
  labelRight,
  autoComplete,
  className,
  ...props
}: PasswordFieldWrapperProps) {
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

          <FormControl>
            <PasswordInput
              {...field}
              placeholder={config.placeholder}
              autoComplete={autoComplete || config.autoComplete}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default PasswordFieldWrapper;
