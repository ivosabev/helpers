import debounce from 'lodash/debounce.js';
import throttle from 'lodash/throttle.js';
import {isDirty} from './isDirty.js';
import {isEmpty} from './isEmpty.js';

export {isDirty, isEmpty, debounce, throttle};

export interface Dictionary<T> {
  [index: string]: T;
}

export type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> {}

export type OptionalKey<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Optional<T> = T | undefined | null;
export type OptionalKeys<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export * from './Array/index.js';
export * from './Boolean/index.js';
export * from './Database/index.js';
export * from './Date/index.js';
export * from './Dom/index.js';
export * from './Function/index.js';
export * from './Geo/index.js';
export * from './GraphQL/index.js';
export * from './Hooks/index.js';
export * from './Number/index.js';
export * from './Object/index.js';
export * from './Other/index.js';
export * from './String/index.js';
export * from './Types/index.js';
export * from './Url/index.js';
export * from './Zod/index.js';
