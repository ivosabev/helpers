import {z} from 'zod';
import {castToNumber, castToString} from '../Zod';
import {toNumber} from '../Number';
import {toArray} from '../Array';
import {toString} from '../String';

export const numericIdSchema = z.preprocess(castToNumber(), z.number().int().positive('Required'));
export type NumericId = z.infer<typeof numericIdSchema>;

export function createNumericIdsSchema(idSchema: typeof numericIdSchema) {
  return z.preprocess((v) => toArray(String(v).split(',').map(toNumber)), z.array(idSchema));
}

export const stringIdSchema = z.preprocess(castToString(), z.string().min(0, 'Required'));
export type StringId = z.infer<typeof stringIdSchema>;

export function createStringIdsSchema(idSchema: typeof stringIdSchema) {
  return z.preprocess((v) => toArray(String(v).split(',').map(toString)), z.array(idSchema));
}

export type AnyId = NumericId | StringId;
