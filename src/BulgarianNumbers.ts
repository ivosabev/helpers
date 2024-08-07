// Bulgarian Numbers Validation

import {z} from 'zod';
import {castToString} from './cast.js';
import {validateCin} from './validateCin.js';
import {validateEgn} from './validateEgn.js';
import {validatePn} from './validatePn.js';

export function bulgarianCompanyIdentificationNumberSchema(message = 'Невалиден ЕИК номер') {
  return z.preprocess(castToString(), z.string()).refine(validateCin, {message});
}
export type BulgarianCompanyIdentificationNumber = String;

export function bulgarianPersonalIdentificationNumberSchema(message = 'Невалиден ЕГН номер') {
  return z.preprocess(castToString(), z.string()).refine(validateEgn, {message});
}
export type BulgarianPersonalIdentificationNumber = String;

export function bulgarianForeignPersonalNumberSchema(message = 'Невалиден ЛНЧ номер') {
  return z.preprocess(castToString(), z.string()).refine(validatePn, {message});
}

export type BulgarianForeignPersonalNumber = String;
