import {isNull} from './isNull';
import {isUndefined} from './isUndefined';

export function isNullOrUndefined(v: any): v is null | undefined {
  return isNull(v) || isUndefined(v);
}
