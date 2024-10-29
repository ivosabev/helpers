import {toBigInt} from './toBigInt.js';
import {toBoolean} from './toBoolean.js';
import {toNumber} from './toNumber.js';

export const castToBigInt =
  (d?: bigint | number) =>
    (v: unknown): bigint =>
      toBigInt(v, d);

export const castToBigIntOptional =
  (d?: bigint | number) =>
    (v: unknown): bigint | undefined =>
      typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : toBigInt(v, d);

export const castToBigIntNullable =
  (d?: bigint | number | null) =>
    (v: unknown): bigint | null =>
      v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBigInt(v, d);

export const castToBigIntNullableOptional =
  (d?: bigint | number) =>
    (v: unknown): bigint | null | undefined =>
      typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBigInt(v, d);

export const castToBoolean =
  (d?: boolean) =>
    (v: unknown): boolean =>
      toBoolean(v, d);

export const castToBooleanOptional =
  (d?: boolean) =>
    (v: unknown): boolean | undefined =>
      typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : toBoolean(v, d);

export const castToBooleanNullable =
  (d?: boolean | null) =>
    (v: unknown): boolean | null =>
      v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBoolean(v, d);

export const castToBooleanNullableOptional =
  (d?: boolean) =>
    (v: unknown): boolean | null | undefined =>
      typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBoolean(v, d);

export const castToNumber =
  (d?: number) =>
    (v: unknown): number =>
      toNumber(v, d);

export const castToNumberOptional =
  (d?: number) =>
    (v: unknown): number | undefined =>
      typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : toNumber(v, d);

export const castToNumberNullable =
  (d?: number | null) =>
    (v: unknown): number | null =>
      v === null || v === 'null' ? null : String(v).trim() === '' ? null : toNumber(v, d);

export const castToNumberNullableOptional =
  (d?: number) =>
    (v: unknown): number | null | undefined =>
      typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : toNumber(v, d);

export const castToString =
  (d?: string) =>
    (v: unknown): string =>
      String(v).trim() || d || '';

export const castToStringOptional =
  (d?: string) =>
    (v: unknown): string | undefined =>
      typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : String(v).trim() || d || '';

export const castToStringNullable =
  (d?: string | null) =>
    (v: unknown): string | null =>
      v === null || v === 'null' ? null : String(v).trim() === '' ? null : String(v).trim() || d || '';

export const castToStringNullableOptional =
  (d?: string) =>
    (v: unknown): string | null | undefined =>
      typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : String(v).trim() || d || '';
