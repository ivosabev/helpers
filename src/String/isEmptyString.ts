export function isEmptyString(v: unknown): v is '' {
  return typeof v === 'string' && v.length === 0;
}
