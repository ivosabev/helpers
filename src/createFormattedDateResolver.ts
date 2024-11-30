import {DateTime} from 'luxon';

type CreateFormattedDateResolverOptions = {
  inputZone?: string;
  format?: string;
  outputZone?: string;
}

export function createFormattedDateResolver(field: string, options?: CreateFormattedDateResolverOptions) {
  return async function (obj: Record<string, any>, args: any) {
    if (!obj[field]) {
      return null;
    }

    // TODO: This needs to accept date only and still work, like '2021-01-01', instead of full date time '2021-01-01T00:00:00.000Z'
    const date = DateTime.fromMillis(Date.parse(obj[field]), {zone: args.inputZone || options?.inputZone || 'UTC'});

    if (!date.isValid) {
      throw new Error(`Field ${field} is not a valid date`);
    }

    const format = args.format || options?.format || `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`;
    const zone = date.zone || options?.outputZone || 'UTC';

    return date.setZone(zone).toFormat(format);
  };
}
