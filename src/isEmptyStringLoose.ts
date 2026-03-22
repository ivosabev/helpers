import {type StringLike} from './StringLike.js';

export function isEmptyStringLoose(v: StringLike): v is '' {
  return typeof v === 'undefined' || v === null || String(v).trim().length === 0;
}
