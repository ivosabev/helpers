import {DateTime} from '../Date';

export function createFormattedDateTimeResolver(field: string, defaultFormat: string = 'D t') {
  return async function (obj: Record<string, any>, args: any) {
    return DateTime.fromMillis(Date.parse(obj[field]))
      .toUTC()
      .toFormat(args.format || defaultFormat);
  };
}
