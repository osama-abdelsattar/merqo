import * as z from "zod";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    ),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long."),
    email: z.email("Please enter a valid email address."),
    phone: z
      .string()
      .regex(
        /^01[0125]\d{8}$/,
        "Please enter a valid Egyptian phone number (e.g., 01012345678).",
      ),
    password: z
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      ),
    rePassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match.",
    path: ["rePassword"],
  });

type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

export { loginSchema, signupSchema };
export type { LoginValues, SignupValues };
