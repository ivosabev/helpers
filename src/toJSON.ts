import {fromStringToJSON} from './fromStringToJSON.js';

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
        const kk = hasBrackets ? k.slice(0, -2) : k;
        const vv = v.length > 1 || hasBrackets ? v.map(fromStringToJSON) : fromStringToJSON(v[0]);
        return [kk, vv];
      })
    );
  }
}
