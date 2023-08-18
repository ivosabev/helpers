export default function abbr(str: string, length: number): string {
  return String(str).length > length ? `${str.substring(0, length)}…` : str;
}
