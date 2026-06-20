"use client";

import { AUTH_FIELDS } from "@/config/auth-forms.config";
import AppFormField from "@/components/common/app-form-field";
import { FormItem } from "@/components/ui/form";
import React from "react";

interface AuthFormFieldProps extends React.ComponentProps<typeof FormItem> {
  name: keyof typeof AUTH_FIELDS;
  labelRight?: React.ReactNode;
  autoComplete?: string;
  label?: string;
  placeholder?: string;
}

function AuthFormField({
  name,
  label,
  placeholder,
  ...props
}: AuthFormFieldProps) {
  const fieldConfig = structuredClone(AUTH_FIELDS[name]);

  if (label) fieldConfig.label = label;
  if (placeholder) fieldConfig.placeholder = placeholder;

  return <AppFormField name={name as string} config={fieldConfig} {...props} />;
}

export default AuthFormField;
