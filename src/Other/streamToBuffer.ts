import type {ReadStream} from 'fs';

export function streamToBuffer(stream: ReadStream): Promise<Buffer> {
  return new Promise((resolve, _reject) => {
    const buffer: any[] = [];
    stream.on('data', (data) => buffer.push(data));
    stream.on('end', () => resolve(Buffer.concat(buffer)));
  });
}
