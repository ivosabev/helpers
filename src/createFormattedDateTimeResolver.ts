
import {DateTime} from 'luxon';

type CreateFormattedDateTimeResolverOptions = {
  defaultFormat?: string;
  defaultZone?: string;
}

/**
 * Helper function to create a resolver for a formatted date time field.
 *
 * GraphQL example:
 *
 * `deliveryEndAt(format: String): DateTime!`
 *
 * @param field
 * @param defaultFormat
 * @returns
 */

export function createFormattedDateTimeResolver(field: string, options?: CreateFormattedDateTimeResolverOptions) {
  return async function (obj: Record<string, any>, args: {format?: string, zone?: string}) {
    const {defaultFormat, defaultZone} = options ?? {};
    const date = DateTime.fromMillis(Date.parse(obj[field]));

    if (!date.isValid) {
      throw new Error(`Field ${field} is not a valid date`);
    }

    const format = args.format || defaultFormat || `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`;
    const zone = date.zone || defaultZone || 'UTC';

    return date.setZone(zone).toFormat(format);
  };
}
