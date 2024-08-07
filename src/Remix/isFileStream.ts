import type {FileStream} from './index.js';

export const isFileStream = (f: any): f is FileStream => {
  return typeof f.filename !== 'undefined' && typeof f.stream !== 'undefined';
};
