//

import {z} from 'zod';
import {castToString} from './cast.js';
import {validateIban} from './validateIban.js';

export function ibanSchema(message = 'Invalid IBAN') {
  return z.preprocess(castToString(), z.string()).refine(validateIban, {message});
}

export type Iban = String;
