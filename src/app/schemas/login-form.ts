import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
  'save-password': z.boolean()
});

export type LoginData = z.infer<typeof loginFormSchema>;
