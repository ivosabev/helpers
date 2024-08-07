import {DateTime} from './DateTime.js';

export function isDateTime(obj: any) {
  return typeof obj === 'object' && obj instanceof DateTime;
}
