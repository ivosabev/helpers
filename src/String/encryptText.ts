import CryptoJS from 'crypto-js';
import {isUndefined} from '../Other/isUndefined';

export function encryptText(text: string, secret?: string) {
  if (isUndefined(secret) && isUndefined(process.env.SECRET)) {
    throw new Error('Environment variable SECRET was not found.');
  }

  if (isUndefined(secret)) {
    throw new Error('Secret was not found.');
  }

  return CryptoJS.AES.encrypt(text, secret ?? process.env.SECRET).toString();
}
