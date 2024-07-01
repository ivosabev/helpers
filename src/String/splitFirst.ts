export function splitFirst(str: string, separator: string): [string, string] {
  const index = str.indexOf(separator);
  return [str.slice(0, index), str.slice(index + 1)];
}
