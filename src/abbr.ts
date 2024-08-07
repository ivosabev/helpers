export function abbr(str: string, length: number) {
  return String(str).length > length ? str.substr(0, length) + '…' : str;
}
