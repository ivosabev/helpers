export function isBigInt(v: any): v is bigint {
  return typeof v === 'bigint';
}
