import {encryptAes, resolveSecret} from './_aes.js';

export function encrypt(text: string, customSecret?: string) {
  return encryptAes(text, resolveSecret(customSecret));
}
