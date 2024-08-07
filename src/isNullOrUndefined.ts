import {isNull} from './isNull.js';
import {isUndefined} from './isUndefined.js';

export function isNullOrUndefined(v: any): v is null | undefined {
  return isNull(v) || isUndefined(v);
}
