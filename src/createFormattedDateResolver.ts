import {DateTime} from 'luxon';

export function createFormattedDateResolver(field: string, {defaultFormat, defaultZone}: {defaultFormat?: string, defaultZone?: string}) {
  return async function (obj: Record<string, any>, args: any) {
    // TODO: This needs to accept date only and still work, like '2021-01-01', instead of full date time '2021-01-01T00:00:00.000Z'
    const date = DateTime.fromMillis(Date.parse(obj[field]));

    if (!date.isValid) {
      throw new Error(`Field ${field} is not a valid date`);
    }

    const format = args.format || defaultFormat || 'y-MM-dd';
    const zone = date.zone || defaultZone || 'UTC';

    return date.setZone(zone).toFormat(format);
  };
}
