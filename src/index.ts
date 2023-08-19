import debounce from 'lodash/debounce';
import isEmpty from './isEmpty';

export interface Dictionary<T> {
  [index: string]: T;
}

export * from './Array';
export * from './Date';
export * from './Dom';
export * from './Function';
export * from './GraphQL';
export * from './Number';
export * from './Object';
export * from './Other';
export * from './String';

export {debounce, isEmpty};
