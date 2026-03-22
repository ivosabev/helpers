import {type BooleanLike} from './BooleanLike.js';
import {type NumberLike} from './NumberLike.js';
import {type StringLike} from './StringLike.js';
import {toBigInt} from './toBigInt.js';
import {toBoolean} from './toBoolean.js';
import {toNumber} from './toNumber.js';

export const castToBigInt =
  (d?: bigint | number) =>
  (v: NumberLike): bigint =>
    toBigInt(v, d);

export const castToBigIntOptional =
  (d?: bigint | number) =>
  (v: NumberLike): bigint | undefined =>
    typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : toBigInt(v, d);

export const castToBigIntNullable =
  (d?: bigint | number | null) =>
  (v: NumberLike): bigint | null =>
    v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBigInt(v, d ?? undefined);

export const castToBigIntNullableOptional =
  (d?: bigint | number) =>
  (v: NumberLike): bigint | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBigInt(v, d);

export const castToBoolean =
  (d?: boolean) =>
  (v: BooleanLike): boolean =>
    toBoolean(v, d);

export const castToBooleanOptional =
  (d?: boolean) =>
  (v: BooleanLike): boolean | undefined =>
    typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : toBoolean(v, d);

export const castToBooleanNullable =
  (d?: boolean | null) =>
  (v: BooleanLike): boolean | null =>
    v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBoolean(v, d ?? undefined);

export const castToBooleanNullableOptional =
  (d?: boolean) =>
  (v: BooleanLike): boolean | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : toBoolean(v, d);

export const castToNumber =
  (d?: number) =>
  (v: unknown): number =>
    toNumber(v, d);

export const castToNumberOptional =
  (d?: number) =>
  (v: StringLike): number | undefined =>
    typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : toNumber(v, d);

export const castToNumberNullable =
  (d?: number | null) =>
  (v: StringLike): number | null =>
    v === null || v === 'null' ? null : String(v).trim() === '' ? null : toNumber(v, d ?? undefined);

export const castToNumberNullableOptional =
  (d?: number) =>
  (v: StringLike): number | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : toNumber(v, d);

export const castToString =
  (d?: string) =>
  (v: unknown): string =>
    String(v).trim() || d || '';

export const castToStringOptional =
  (d?: string) =>
  (v: StringLike): string | undefined =>
    typeof v === 'undefined' ? undefined : String(v).trim() === '' ? undefined : String(v).trim() || d || '';

export const castToStringNullable =
  (d?: string | null) =>
  (v: StringLike): string | null =>
    v === null || v === 'null' ? null : String(v).trim() === '' ? null : String(v).trim() || d || '';

export const castToStringNullableOptional =
  (d?: string) =>
  (v: StringLike): string | null | undefined =>
    typeof v === 'undefined' ? undefined : v === null || v === 'null' ? null : String(v).trim() === '' ? null : String(v).trim() || d || '';
