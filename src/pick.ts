import type {Dictionary} from './Dictionary.js';

export function pick(obj: Dictionary<any>, keys: any[]): Dictionary<any> {
  return Object.keys(obj).reduce((p, c: string) => (keys.indexOf(c) === -1 ? p : {...p, [c]: obj[c]}), {});
}
