import { CheckoutField } from "@/types/checkout.type";

export const CHECKOUT_FIELDS: Record<string, CheckoutField> = {
  city: {
    label: "City",
    placeholder: "Cairo",
    autoComplete: "off",
    type: "text",
  },
  details: {
    label: "Address",
    placeholder: "123 example st.",
    autoComplete: "shipping address-level1 webauthn",
    type: "text",
  },
  phone: {
    label: "Phone Number",
    placeholder: "0101 234 5678",
    autoComplete: "tel",
    type: "tel",
  },
};
