import { z } from 'zod';

export const resumeSchema = z.object({
  firstName: z.string().min(1, '名前入力してください'),
  middleName: z.string(),
  lastName: z.string().min(1, 'Last Name is required'),
  age: z.coerce.number({ invalid_type_error: '半角数字ください' }).gt(1),
  email: z.union([z.literal(''), z.string().email()]),
  phone: z.string(),
  web: z.union([z.literal(''), z.string().url()]),
  introduction: z.string().optional(),
  skills: z.array(z.object({ name: z.string().min(1, 'Name is required') })),
  experience: z.array(
    z.object({
      name: z.string().min(1, 'Job Name is required'),
      jobTitle: z.string(),
      description: z.string().optional(),
      date: z.string().date()
    })
  ),
  education: z.array(
    z.object({
      name: z.string().min(1, 'School Name is required'),
      description: z.string().optional()
    })
  )
});

export type ResumeData = z.infer<typeof resumeSchema>;
