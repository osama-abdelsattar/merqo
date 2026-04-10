import * as z from "zod";

export const shippingSchema = z.object({
  type: z.enum(["Cash", "Visa"]),
  city: z.string("Please enter a valid city name.").min(3),
  details: z.string("Please enter a valid address.").min(12),
  phone: z
    .string()
    .regex(
      /^01[0125]\d{8}$/,
      "Please enter a valid Egyptian phone number (e.g., 01012345678).",
    ),
});

export type ShippingValues = z.infer<typeof shippingSchema>;
