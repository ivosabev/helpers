import {DateTime} from 'luxon';
import {strtotime} from './strtotime.js';

export * from 'luxon';

export * from './isDateTime.js';
export * from './toDateTimeFromRaw.js';
export * from './toDateTimeOrUndefined.js';
export * from './toRelativeTime.js';
export {strtotime};

// Do some bad things to Luxon

declare module 'luxon/src/datetime.js' {
  export interface DateTime {
    toTimeString: (fmt?: Intl.DateTimeFormatOptions) => string;
    toUnix: () => number;
  }
}

DateTime.prototype.toTimeString = function (fmt = DateTime.TIME_24_SIMPLE) {
  return this.setLocale('en').toLocaleString(fmt);
};

DateTime.prototype.toUnix = function (): number {
  return Number(this.toFormat('X'));
};

export {DateTime};
