import {isNumberLike} from './isNumberLike';

export const toBigInt = (v: any, d: bigint | number = NaN) => (isNumberLike(v) ? BigInt(v) : isNumberLike(d) ? BigInt(d) : d);
