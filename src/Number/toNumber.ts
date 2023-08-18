import {isNumberLike} from './isNumberLike';

export const toNumber = (v: any, d: number = NaN) => (isNumberLike(v) ? Number(v) : d);
