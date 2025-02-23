export function toNumber(v: unknown): number;
export function toNumber(v: unknown, d?: number): number;
export function toNumber(v: unknown, d?: number | undefined): number | undefined;
export function toNumber(v: unknown, d?: number | null): number | null;
export function toNumber(v: unknown, d?: number | null | undefined): number | null | undefined {
  const vv = Number(v);
  const dd = arguments.length === 1 ? NaN : d;
  return Number.isNaN(vv) ? dd : vv;
}
