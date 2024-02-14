import type {Readable} from 'stream';

export const getBufferFromReadableStream = async (stream: Readable): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    const buffers: Uint8Array[] = [];
    stream.on('data', (data) => {
      buffers.push(data);
    });
    stream.on('end', () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on('error', reject);
  });
