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
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password-input";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

export interface FormFieldConfig {
  label: string;
  placeholder: string;
  autoComplete?: string;
  type: string;
}

interface AppFormFieldProps extends Omit<React.ComponentProps<typeof FormItem>, "name"> {
  name: string;
  config: FormFieldConfig;
  labelRight?: React.ReactNode;
  autoComplete?: string;
}

export default function AppFormField({
  name,
  config,
  labelRight,
  autoComplete,
  className,
  ...props
}: AppFormFieldProps) {
  const { control } = useFormContext();
  const isPassword = config.type === "password";

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

          {isPassword ? (
            <FormControl>
              <PasswordInput
                {...field}
                placeholder={config.placeholder}
                autoComplete={autoComplete || config.autoComplete}
              />
            </FormControl>
          ) : name === "phone" ? (
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
          ) : (
            <FormControl>
              <Input
                {...field}
                type={config.type}
                placeholder={config.placeholder}
                autoComplete={autoComplete || config.autoComplete}
              />
            </FormControl>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
