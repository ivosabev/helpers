import crypto from 'node:crypto';

export function decryptText(text: string) {
  if (process.env.SECRET === undefined) throw new Error('Environment variable SECRET was not found.');

  const ALGO = 'aes-192-cbc';
  const KEY = crypto.scryptSync(process.env.SECRET, 'salt', 24);

  const [encrypted, iv] = text.split('|');
  if (!iv) throw new Error('IV not found');
  const decipher = crypto.createDecipheriv(ALGO, KEY, Buffer.from(iv, 'hex'));
  return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
}
