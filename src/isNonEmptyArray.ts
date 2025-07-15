import {type NonEmptyArray} from './NonEmptyArray.js';

export function isNonEmptyArray<T>(v: T[]): v is NonEmptyArray<T> {
  return Array.isArray(v) && v.length > 0;
}
