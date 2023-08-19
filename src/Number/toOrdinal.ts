export function toOrdinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  // @ts-expect-error
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
