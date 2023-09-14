import crypto from 'node:crypto';

export function encryptText(text: string) {
  if (process.env.SECRET === undefined) throw new Error('Environment variable SECRET was not found.');

  const ALGO = 'aes-192-cbc';
  const KEY = crypto.scryptSync(process.env.SECRET, 'salt', 24);

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, KEY, iv);
  const encrypted = cipher.update(text, 'utf8', 'hex');

  return [encrypted + cipher.final('hex'), Buffer.from(iv).toString('hex')].join('|');
}
