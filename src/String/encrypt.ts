import CryptoJS from 'crypto-js';
import {isUndefined} from '../Other/isUndefined';

export function encrypt(text: string | Record<string, any> | any[], secret?: string) {
  if (isUndefined(secret) && isUndefined(process.env.SECRET)) {
    throw new Error('Environment variable SECRET was not found.');
  }

  if (isUndefined(secret)) {
    throw new Error('Secret was not found.');
  }

  return CryptoJS.AES.encrypt(JSON.stringify(text), secret ?? process.env.SECRET).toString();
}
