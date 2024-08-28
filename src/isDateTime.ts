import {DateTime} from 'luxon';

export function isDateTime(obj: any) {
  return typeof obj === 'object' && obj instanceof DateTime;
}
