import {z} from 'zod';

export const zipSchema = z.preprocess((v) => String(v).trim().slice(0, 5), z.string().regex(/^[0-9]{5}?$/));
// (z
//   .string()
//   .regex(/^\d+$/)
//   .transform(Number)).
//   .min(5)
//   .regex(/^[0-9]{5}(?:-[0-9]{4})?$/)
//   .transform((v) => String(v).trim().slice(0, 5));
export type Zip = z.infer<typeof zipSchema>;
