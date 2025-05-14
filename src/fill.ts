export function fill<T>(a: T[], l: number, f?: T): (T | undefined)[] {
  const missing = l - a.length;
  if (missing > 0) {
    a.push(...Array(missing).fill(f));
  }
  return a;
}
