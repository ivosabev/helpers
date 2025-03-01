import {type DateTimeOptions, DateTime} from 'luxon';
import {strtotime} from './strtotime.js';

export function toDateTimeFromRaw(raw: string, options?: DateTimeOptions): DateTime {
  const zone = (options && options.zone) || null;
  const timestamp: number = strtotime(raw, zone ? (typeof zone === 'string' ? zone : zone.name) : null);
  return timestamp ? DateTime.fromMillis(timestamp, options) : DateTime.invalid('Could not parse successfully the given value.');
}
