import {type NumberLike} from './NumberLike.js';

export const isNumberLike = (v: unknown): v is NumberLike =>
  (typeof v === 'number' && !Number.isNaN(v)) ||
  (typeof v === 'bigint' && !Number.isNaN(Number(v))) ||
  (typeof v === 'string' && !Number.isNaN(Number(String(v).trim() || undefined)));
