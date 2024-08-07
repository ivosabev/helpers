import CryptoJS from 'crypto-js';
import {isUndefined} from './isUndefined.js';

export function encrypt(text: string, customSecret?: string) {
  if (isUndefined(customSecret) && isUndefined(process.env.SECRET)) {
    throw new Error('Environment variable SECRET was not found.');
  }

  const secret = customSecret ?? process.env.SECRET;

  if (isUndefined(secret)) {
    throw new Error('Secret was not found.');
  }

  return CryptoJS.AES.encrypt(text, secret).toString();
}
