import {isNumberLike} from './isNumberLike';

export const toNumber = (v: any, d?: number | null | undefined) => (isNumberLike(v) ? Number(v) : d);
