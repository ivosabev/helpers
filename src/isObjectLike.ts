export function isObjectLike(value: unknown): value is object {
  return value !== null && typeof value === 'object';
}
