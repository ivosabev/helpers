import {createCipheriv, createDecipheriv, createHash, randomBytes} from 'node:crypto';
import {isUndefined} from './isUndefined.js';

const SALTED_PREFIX = Buffer.from('Salted__');
const KEY_LEN = 32;
const IV_LEN = 16;
const SALT_LEN = 8;

function evpBytesToKey(password: Buffer, salt: Buffer) {
  let derived = Buffer.alloc(0);
  let block = Buffer.alloc(0);

  while (derived.length < KEY_LEN + IV_LEN) {
    block = createHash('md5')
      .update(Buffer.concat([block, password, salt]))
      .digest();
    derived = Buffer.concat([derived, block]);
  }

  return {
    iv: derived.subarray(KEY_LEN, KEY_LEN + IV_LEN),
    key: derived.subarray(0, KEY_LEN),
  };
}

export function resolveSecret(customSecret?: string) {
  if (isUndefined(customSecret) && isUndefined(process.env['SECRET'])) {
    throw new Error('Environment variable SECRET was not found.');
  }

  const secret = customSecret ?? process.env['SECRET'];

  if (isUndefined(secret)) {
    throw new Error('Secret was not found.');
  }

  return secret;
}

export function encryptAes(text: string, secret: string) {
  const salt = randomBytes(SALT_LEN);
  const {key, iv} = evpBytesToKey(Buffer.from(secret), salt);
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  const ciphertext = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);

  return Buffer.concat([SALTED_PREFIX, salt, ciphertext]).toString('base64');
}

export function decryptAes(text: string, secret: string) {
  const buf = Buffer.from(text, 'base64');
  const salt = buf.subarray(SALTED_PREFIX.length, SALTED_PREFIX.length + SALT_LEN);
  const ciphertext = buf.subarray(SALTED_PREFIX.length + SALT_LEN);
  const {key, iv} = evpBytesToKey(Buffer.from(secret), salt);
  const decipher = createDecipheriv('aes-256-cbc', key, iv);

  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
}
