import {type Dictionary} from './Dictionary.js';

export function unique(arr: number[]): number[];
export function unique(arr: string[]): string[];
export function unique(arr: Dictionary<string>[], property: string): Dictionary<string>[];
export function unique(arr: any[], property?: string) {
  if (property) {
    // TODO: This may not be working properly, needs to be tested
    return arr.filter((o, p, a) => a.map((o2) => o2[property]).indexOf(o[property]) === p);
  }
  return [...new Set(arr)];
}
