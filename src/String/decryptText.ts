import crypto from 'node:crypto';
import {isUndefined} from '../Other/isUndefined';

export function decryptText(text: string, customSecret?: string) {
  if (isUndefined(customSecret) && isUndefined(process.env.SECRET)) {
    throw new Error('Environment variable SECRET was not found.');
  }

  const ALGO = 'aes-192-cbc';
  const KEY = crypto.scryptSync((customSecret ?? process.env.SECRET)!, 'salt', 24);

  const [encrypted, iv] = text.split('|');
  if (!iv) throw new Error('IV not found');
  const decipher = crypto.createDecipheriv(ALGO, KEY, Buffer.from(iv, 'hex'));
  return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
}
