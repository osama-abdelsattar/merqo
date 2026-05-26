import * as z from "zod";
import {
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
  PHONE_ERROR_MESSAGE,
  PHONE_REGEX,
} from "./auth.schema";

const accountInfoSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .optional()
    .or(z.literal("")),
  email: z
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .regex(PHONE_REGEX, PHONE_ERROR_MESSAGE)
    .optional()
    .or(z.literal("")),
});

const passwordChangeSchema = z
  .object({
    currentPassword: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
    password: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
    rePassword: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
  })
  .refine((values) => values.password === values.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

type AccountInfoValues = z.infer<typeof accountInfoSchema>;
type PasswordChangeValues = z.infer<typeof passwordChangeSchema>;

export { accountInfoSchema, passwordChangeSchema };
export type { AccountInfoValues, PasswordChangeValues };
