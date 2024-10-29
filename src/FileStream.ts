import {type Readable} from 'node:stream';

export type FileStream = {
  filename: string;
  stream: Readable;
};

export type FileStreamOrFilepath = FileStream | string;
