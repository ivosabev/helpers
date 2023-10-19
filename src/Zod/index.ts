import {z} from 'zod';
import {toBoolean} from '../Boolean/toBoolean';
import {toNumber} from '../Number/toNumber';

export const emailSchema = z.string().email();
export type Email = z.infer<typeof emailSchema>;

export const zipSchema = z.preprocess((v) => String(v).trim().slice(0, 5), z.string().regex(/^[0-9]{5}?$/));
// (z
//   .string()
//   .regex(/^\d+$/)
//   .transform(Number)).
//   .min(5)
//   .regex(/^[0-9]{5}(?:-[0-9]{4})?$/)
//   .transform((v) => String(v).trim().slice(0, 5));
export type Zip = z.infer<typeof zipSchema>;

export const castToBoolean =
  (d?: boolean) =>
  (v: unknown): boolean =>
    toBoolean(v, d);

export const castToBooleanOptional =
  (d?: boolean) =>
  (v: unknown): boolean | undefined =>
    typeof v === 'undefined' ? undefined : toBoolean(v, d);

export const castToBooleanNullable =
  (d?: boolean | null) =>
  (v: unknown): boolean | null =>
    v === null || v === 'null' ? null : toBoolean(v, d);

export const castToBooleanNullableOptional =
  (d?: boolean) =>
  (v: unknown): boolean | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : toBoolean(v, d);

export const castToNumber =
  (d?: number) =>
  (v: unknown): number =>
    toNumber(v, d);

export const castToNumberOptional =
  (d?: number) =>
  (v: unknown): number | undefined =>
    typeof v === 'undefined' ? undefined : toNumber(v, d);

export const castToNumberNullable =
  (d?: number | null) =>
  (v: unknown): number | null =>
    // @ts-expect-error
    v === null || v === 'null' ? null : toNumber(v, d);

export const castToNumberNullableOptional =
  (d?: number) =>
  (v: unknown): number | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : toNumber(v, d);

export const castToString =
  (d?: string) =>
  (v: unknown): string =>
    String(v).trim() || d || '';

export const castToStringOptional =
  (d?: string) =>
  (v: unknown): string | undefined =>
    typeof v === 'undefined' ? undefined : String(v).trim() || d || '';

export const castToStringNullable =
  (d?: string | null) =>
  (v: unknown): string | null =>
    v === null || v === 'null' ? null : String(v).trim() || d || '';

export const castToStringNullableOptional =
  (d?: string) =>
  (v: unknown): string | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() || d || '';
