export function isNumeric(v: any): v is number | bigint {
  return typeof v === 'number' || typeof v === 'bigint';
}
