export {isDirty} from './isDirty';
export {isEmpty} from './isEmpty';
export {debounce, throttle} from 'lodash';

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

export * from './Array';
export * from './Boolean';
export * from './Database';
export * from './Date';
export * from './Dom';
export * from './Function';
export * from './Geo';
export * from './GraphQL';
export * from './Hooks';
export * from './Number';
export * from './Object';
export * from './Other';
export * from './String';
export * from './Url';
export * from './Zod';
