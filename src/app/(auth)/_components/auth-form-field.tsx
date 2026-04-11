"use client";

import { AUTH_FIELDS } from "@/config/auth-forms.config";
import AppFormField from "@/components/ui/app-form-field";
import { FormItem } from "@/components/ui/form";
import React from "react";

interface AuthFormFieldProps extends React.ComponentProps<typeof FormItem> {
  name: keyof typeof AUTH_FIELDS;
  labelRight?: React.ReactNode;
  autoComplete?: string;
}

function AuthFormField({
  name,
  ...props
}: AuthFormFieldProps) {
  const fieldConfig = AUTH_FIELDS[name];

  return <AppFormField name={name as string} config={fieldConfig} {...props} />;
}

export default AuthFormField;
