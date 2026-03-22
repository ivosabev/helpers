import {type Numeric} from './Numeric.js';

export function isNumeric(v: unknown): v is Numeric {
  return typeof v === 'number' || typeof v === 'bigint';
}
