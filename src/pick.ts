import {Dictionary} from '.';

export default function pick(obj: Dictionary<any>, keys: any[]): {} {
  return Object.keys(obj).reduce((p, c: string) => (keys.indexOf(c) === -1 ? p : {...p, [c]: obj[c]}), {});
}
