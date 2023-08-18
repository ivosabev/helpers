import debounce from 'lodash/debounce';
import isEmpty from './isEmpty';
import pick from './pick';

export interface Dictionary<T> {
  [index: string]: T;
}

export * from './Array';
export * from './Date';
export * from './Number';
export * from './Object';
export * from './Other';
export * from './String';

export {debounce, isEmpty, pick};
