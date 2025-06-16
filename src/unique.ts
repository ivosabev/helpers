import {type Dictionary} from './Dictionary.js';

export function unique(arr: number[]): number[];
export function unique(arr: string[]): string[];
export function unique<T extends Dictionary<any>>(arr: T[], property: string): T[];
export function unique(arr: any[], property?: string): any[] {
  if (property) {
    // TODO: This may not be working properly, needs to be tested
    return arr.filter((o, p, a) => a.map((o2) => o2[property]).indexOf(o[property]) === p);
  }
  return [...new Set(arr)];
}
