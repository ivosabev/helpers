import {isNumberLike} from './isNumberLike';

export const toNumber = (v: any, d?: number) => (isNumberLike(v) ? Number(v) : d);
