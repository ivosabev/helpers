import {decryptAes, resolveSecret} from './_aes.js';

export function decrypt(text: string, customSecret?: string) {
  return decryptAes(text, resolveSecret(customSecret));
}
