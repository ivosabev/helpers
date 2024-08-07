import {isNumberLike} from './isNumberLike.js';

export function toNumber(v: any, d?: number): number;
export function toNumber(v: any, d?: undefined): number | undefined;
export function toNumber(v: any, d?: number | undefined) {
  return isNumberLike(v) ? Number(v) : d;
}
