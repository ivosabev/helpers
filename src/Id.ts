import {z} from 'zod';
import {castToBigInt, castToNumber, castToString} from './cast.js';
import {toArray} from './toArray.js';
import {toBigInt} from './toBigInt.js';
import {toNumber} from './toNumber.js';
import {toString} from './toString.js';

export const intIdSchema = z.preprocess(castToNumber(), z.number().int().positive('Required'));
export type IntId = z.infer<typeof intIdSchema>;

export function createIntIdsSchema(idSchema: typeof intIdSchema) {
  return z.preprocess((v) => toArray(String(v).split(',').map(toNumber)), z.array(idSchema));
}

export const bigIntIdSchema = z.preprocess(castToBigInt(), z.bigint().positive('Required'));
export type BigIntId = z.infer<typeof bigIntIdSchema>;

export function createBigIntIdsSchema(idSchema: typeof bigIntIdSchema) {
  return z.preprocess((v) => toArray(String(v).split(',').map(toBigInt)), z.array(idSchema));
}

export const numericIdSchema = z.union([intIdSchema, bigIntIdSchema]);
export type NumericId = z.infer<typeof numericIdSchema>;

export function createNumericIdsSchema(idSchema: typeof numericIdSchema) {
  const fn = String(bigIntIdSchema._def.schema._def.typeName) === 'ZodBigInt' ? toBigInt : toNumber;
  // @ts-expect-error
  return z.preprocess((v) => toArray(String(v).split(',').map(fn)), z.array(idSchema));
}

export const stringIdSchema = z.preprocess(castToString(), z.string().min(0, 'Required'));
export type StringId = z.infer<typeof stringIdSchema>;

export function createStringIdsSchema(idSchema: typeof stringIdSchema) {
  return z.preprocess((v) => toArray(String(v).split(',').map(toString)), z.array(idSchema));
}

export type AnyId = NumericId | StringId;
