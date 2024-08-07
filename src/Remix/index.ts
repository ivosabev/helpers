import type {Readable} from 'node:stream';

export * from './createFileResponse.js';
export * from './getBufferFromReadableStream.js';
export * from './getFileStream.js';
export * from './isFileStream.js';

export type FileStream = {
  filename: string;
  stream: Readable;
};

export type FileStreamOrFilepath = FileStream | string;
