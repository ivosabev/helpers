import {z} from 'zod';

export const emailSchema = z.string().email();
export const emailSchemaAdvanced = z.preprocess((v) => String(v).trim(), z.string().email());
export type Email = z.infer<typeof emailSchema>;
