import {DateTime} from '../Date';

export function createFormattedDateResolver(field: string, defaultFormat: string = 'y-MM-dd') {
  return async function (obj: Record<string, any>, args: any) {
    return DateTime.fromMillis(Date.parse(obj[field]))
      .toUTC()
      .toFormat(args.format || defaultFormat);
  };
}
