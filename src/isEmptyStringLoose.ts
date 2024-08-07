export function isEmptyStringLoose(v: unknown): v is '' {
  return typeof v === 'undefined' || v === null || String(v).trim().length === 0;
}
