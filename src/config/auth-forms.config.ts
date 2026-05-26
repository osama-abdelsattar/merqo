import { AuthField } from "@/types/auth.type";

const AUTH_FIELDS: Record<string, AuthField> = {
  name: {
    label: "Full Name",
    placeholder: "e.g. Jack Sparrow",
    autoComplete: "name",
    type: "text",
  },
  email: {
    label: "Email Address",
    placeholder: "example@domain.com",
    autoComplete: "email webauthn",
    type: "email",
  },
  phone: {
    label: "Phone Number",
    placeholder: "0101 234 5678",
    autoComplete: "tel",
    type: "tel",
  },
  password: {
    label: "Password",
    placeholder: "Enter your password",
    autoComplete: "current-password webauthn",
    type: "password",
  },
  currentPassword: {
    label: "Old Password",
    placeholder: "Enter your old password",
    autoComplete: "current-password webauthn",
    type: "password",
  },
  rePassword: {
    label: "Confirm Password",
    placeholder: "Confirm your password",
    autoComplete: "new-password webauthn",
    type: "password",
  },
};

export { AUTH_FIELDS };
