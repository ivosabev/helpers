import path from 'node:path';
import {type FileStreamOrFilepath} from './FileStream.js';
import {getBufferFromReadableStream} from './getBufferFromReadableStream.js';
import {getFileStream} from './getFileStream.js';

const getContentTypeForExt = (ext: string) => {
  const contentType = {
    '.csv': 'application/csv',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
  }[ext];

  if (!contentType) {
    throw new Error('Unknown file type.');
  }

  return contentType;
};

export const createFileResponse = async (fileStreamOrFilepath: FileStreamOrFilepath) => {
  const {filename, stream} = await getFileStream(fileStreamOrFilepath);
  const ext = path.parse(filename).ext.toLowerCase();
  const body = await getBufferFromReadableStream(stream);

  return new Response(new Uint8Array(body), {
    headers: {
      'Content-Disposition': `attachment; filename="${encodeURI(filename)}"`,
      'Content-Length': body.byteLength.toString(),
      'Content-Type': getContentTypeForExt(ext),
      Expires: '0',
      Pragma: 'no-cache',
    },
    status: 200,
  });
};
