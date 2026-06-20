import * as z from "zod";
import { PHONE_ERROR_MESSAGE, PHONE_REGEX } from "@/lib/schemas/auth.schema";

const shippingSchema = z.object({
  type: z.enum(["Cash", "Visa"]),
  city: z.string("Please enter a valid city name.").min(3),
  details: z.string("Please enter a valid address.").min(12),
  phone: z.string().regex(PHONE_REGEX, PHONE_ERROR_MESSAGE),
});

type ShippingValues = z.infer<typeof shippingSchema>;

export { shippingSchema, type ShippingValues };
