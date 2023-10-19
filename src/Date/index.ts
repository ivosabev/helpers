import type {DateTimeOptions} from 'luxon';
import {Duration, Info, Interval, DateTime, Settings, Zone} from 'luxon';
import {strtotime} from './strtotime';

export * from './isDateTime';
export * from './toDateTimeOrUndefined';
export * from './toRelativeTime';
export {strtotime};

// Do some bad things to Luxon

declare module 'luxon/src/datetime' {
  export interface DateTime {
    toTimeString(fmt?: Intl.DateTimeFormatOptions): string;
    toUnix(): number;
  }
}

DateTime.prototype.toTimeString = function (fmt = DateTime.TIME_24_SIMPLE) {
  return this.setLocale('en').toLocaleString(fmt);
};

DateTime.prototype.toUnix = function (): number {
  return Number(this.toFormat('X'));
};

// @ts-expect-error
DateTime.fromRaw = function (raw: string, options?: DateTimeOptions): DateTime {
  const zone = (options && options.zone) || null;
  const timestamp: number = strtotime(raw, zone ? (typeof zone === 'string' ? zone : zone.name) : null);
  return timestamp ? DateTime.fromMillis(timestamp, options) : DateTime.invalid('Could not parse successfully the given value.');
};

export {DateTime, Duration, Info, Interval, Settings, Zone};
