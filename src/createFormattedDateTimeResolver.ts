import {DateTime} from './DateTime.js';

export function createFormattedDateTimeResolver(field: string, defaultFormat?: string) {
  return async function (obj: Record<string, any>, args: any) {
    const date = DateTime.fromMillis(Date.parse(obj[field]));
    if (defaultFormat) {
      return date.toUTC().toFormat(defaultFormat);
    } else {
      return date.toUTC().toISO();
    }
  };
}
