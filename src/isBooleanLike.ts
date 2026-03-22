import {type BooleanLike} from './BooleanLike.js';

export const isBooleanLike = (v: unknown): v is BooleanLike =>
  typeof v === 'boolean' ||
  v === 0 ||
  v === 1 ||
  v === '0' ||
  v === '1' ||
  v === 'true' ||
  v === 'false' ||
  v === null ||
  typeof v === 'undefined';
