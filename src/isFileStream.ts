import {type FileStream} from './FileStream.js';

export const isFileStream = (f: any): f is FileStream => {
  return typeof f.filename !== 'undefined' && typeof f.stream !== 'undefined';
};
