import * as z from "zod";

export const loginValidator = z.object({
  email: z
    .string({ message: "Email cannot be empty" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ message: "Password cannot be empty" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginValidatorType = z.infer<typeof loginValidator>;
