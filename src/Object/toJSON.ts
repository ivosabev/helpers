/**
 * Convert value to JSON
 *
 * NOTE: Currently only works with FormData
 */
export function toJSON(value: FormData) {
  if (value instanceof FormData) {
    return Object.fromEntries(
      [...value.keys()].map((k) => {
        // NOTE: Allow for the input array naming convention of name[]
        const v = value.getAll(k);
        const hasBrackets = k.endsWith('[]');
        return [hasBrackets ? k.slice(0, -2) : k, v.length > 1 || hasBrackets ? v : v[0]];
      }),
    );
  }
}
