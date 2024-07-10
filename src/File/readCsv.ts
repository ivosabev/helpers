import type {ReadStream} from 'node:fs';
import fs from 'node:fs';
import chardet from 'chardet';
import {streamToBuffer} from '../Other/streamToBuffer';

export async function readCsv(file: number | string | ReadStream) {
  const buffer = await (typeof file === 'string' || typeof file === 'number' ? fs.readFileSync(file) : streamToBuffer(file));
  const detectedEncoding = chardet.detect(buffer);

  let encoding: BufferEncoding;
  switch (detectedEncoding) {
    case 'UTF-8':
      encoding = 'utf8';
      break;
    case 'UTF-16LE':
      encoding = 'utf16le';
      break;
    case 'UTF-16BE':
      encoding = 'utf16le';
      break;
    case 'ISO-8859-1':
      encoding = 'latin1';
      break;
    default:
      throw new Error('Unsupported encoding on file import!');
  }

  return buffer.toString(encoding).trim();
}
