"use client";

import React from "react";
import PhoneInputField from "./_components/phone-input-field";
import PasswordFieldWrapper from "./_components/password-field-wrapper";
import DefaultFormInput from "./_components/default-form-input";

interface FormFieldConfig {
  label: string;
  placeholder: string;
  autoComplete?: string;
  type: string;
}

interface AppFormFieldProps extends Omit<React.ComponentProps<"div">, "name"> {
  name: string;
  config: FormFieldConfig;
  labelRight?: React.ReactNode;
  autoComplete?: string;
}

/**
 * Composite form field component that delegates to specialized input types
 * Routes to PasswordFieldWrapper, PhoneInputField, or DefaultFormInput based on field config
 */
function AppFormField({
  name,
  config,
  labelRight,
  autoComplete,
  className,
  ...props
}: AppFormFieldProps) {
  const isPassword = config.type === "password";
  const isPhone = name === "phone";

  if (isPassword) {
    return (
      <PasswordFieldWrapper
        name={name}
        config={config}
        labelRight={labelRight}
        autoComplete={autoComplete}
        className={className}
        {...props}
      />
    );
  }

  if (isPhone) {
    return (
      <PhoneInputField
        name={name}
        config={config}
        labelRight={labelRight}
        autoComplete={autoComplete}
        className={className}
        {...props}
      />
    );
  }

  return (
    <DefaultFormInput
      name={name}
      config={config}
      labelRight={labelRight}
      autoComplete={autoComplete}
      className={className}
      {...props}
    />
  );
}

export default AppFormField;
export type { FormFieldConfig };
