import {isNumberLike} from './isNumberLike.js';
import {type NumberLike} from './NumberLike.js';

export const toBigInt = (v: NumberLike, d: bigint | number = NaN) => (isNumberLike(v) ? BigInt(v) : isNumberLike(d) ? BigInt(d) : d);
