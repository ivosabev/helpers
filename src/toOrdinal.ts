import {toNumber} from './toNumber.js';

export function toOrdinal(n: number | string) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = toNumber(n) % 100;
  // @ts-expect-error
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
