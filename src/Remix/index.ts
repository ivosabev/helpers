import type {Readable} from 'stream';

export * from './createFileResponse';
export * from './getBufferFromReadableStream';
export * from './getFileStream';
export * from './isFileStream';

export type FileStream = {
  filename: string;
  stream: Readable;
};

export type FileStreamOrFilepath = FileStream | string;
