import {isNumberLike} from './isNumberLike.js';

export function toNumber(v: unknown): number;
export function toNumber(v: unknown, d?: number): number;
export function toNumber(v: unknown, d?: number | undefined): number | undefined;
export function toNumber(v: unknown, d?: number | null): number | null;
export function toNumber(v: unknown, d?: number | null | undefined): number | null | undefined {
  const dd = arguments.length === 1 ? NaN : d;
  // isNumberLike checks for null, undefined and other, which if sent to Number will return 0, which is not what we want
  const vv = isNumberLike(v) ? Number(v) : dd;
  return Number.isNaN(vv) ? dd : vv;
}
