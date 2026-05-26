import * as z from "zod";

const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const PASSWORD_ERROR_MESSAGE =
  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";

const PHONE_REGEX = /^01[0125]\d{8}$/;

const PHONE_ERROR_MESSAGE =
  "Please enter a valid Egyptian phone number (e.g., 01012345678).";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long."),
    email: z.email("Please enter a valid email address."),
    phone: z.string().regex(PHONE_REGEX, PHONE_ERROR_MESSAGE),
    password: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
    rePassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match.",
    path: ["rePassword"],
  });

type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

export {
  loginSchema,
  signupSchema,
  PASSWORD_REGEX,
  PASSWORD_ERROR_MESSAGE,
  PHONE_REGEX,
  PHONE_ERROR_MESSAGE,
};
export type { LoginValues, SignupValues };
