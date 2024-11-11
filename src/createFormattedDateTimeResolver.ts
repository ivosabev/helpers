
import {DateTime} from 'luxon';

type CreateFormattedDateTimeResolverOptions = {
  inputZone?: string;
  format?: string;
  outputZone?: string;
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
  return async function (obj: Record<string, any>, args: {format?: string, inputZone?: string, outputZone?: string}) {
    const date = DateTime.fromMillis(Date.parse(obj[field]), {zone: args.inputZone || options?.inputZone || 'UTC'});

    if (!date.isValid) {
      throw new Error(`Field ${field} is not a valid date`);
    }

    const format = args.format || options?.format || `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`;
    const zone = date.zone || options?.outputZone || 'UTC';

    return date.setZone(zone).toFormat(format);
  };
}
