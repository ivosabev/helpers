export default function isEmptyString(v: string): boolean {
  return v == null || String(v).trim().length === 0;
}
