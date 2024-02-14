import type {FileStream} from '.';

export const isFileStream = (f: any): f is FileStream => {
  return typeof f.filename !== 'undefined' && typeof f.stream !== 'undefined';
};
