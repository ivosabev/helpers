import crypto from 'node:crypto';
import {isUndefined} from '../Other/isUndefined';

export function encryptText(text: string, customSecret?: string) {
  if (isUndefined(customSecret) && isUndefined(process.env.SECRET)) {
    throw new Error('Environment variable SECRET was not found.');
  }

  const ALGO = 'aes-192-cbc';
  const KEY = crypto.scryptSync((customSecret ?? process.env.SECRET)!, 'salt', 24);

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, KEY, iv);
  const encrypted = cipher.update(text, 'utf8', 'hex');

  return [encrypted + cipher.final('hex'), Buffer.from(iv).toString('hex')].join('|');
}
