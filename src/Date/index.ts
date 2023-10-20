import type {DateTimeOptions} from 'luxon';
import {Duration, Info, Interval, DateTime, Settings, Zone} from 'luxon';
import {strtotime} from './strtotime';

export * from './isDateTime';
export * from './toDateTimeFromRaw';
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

export {DateTime, Duration, Info, Interval, Settings, Zone};
