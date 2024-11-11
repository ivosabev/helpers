import {DateTime} from 'luxon';

// TODO: This needs to accept date only and still work, like '2021-01-01', instead of full date time '2021-01-01T00:00:00.000Z'

export function createFormattedDateResolver(field: string, defaultFormat: string = 'y-MM-dd') {
  return async function (obj: Record<string, any>, args: any) {
    const date = DateTime.fromMillis(Date.parse(obj[field]));

    if (!date.isValid) {
      throw new Error(`Field ${field} is not a valid date`);
    }

    if (args.format) {
      return date.toUTC().toFormat(args.format);
    } else if (defaultFormat) {
      return date.toUTC().toFormat(defaultFormat);
    } else {
      return date.toUTC().toISODate();
    }
  };
}
