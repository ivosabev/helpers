import {DateTime} from 'luxon';

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
export function createFormattedDateTimeResolver(field: string, defaultFormat?: string) {
  return async function (obj: Record<string, any>, args: {format?: string}) {
    const date = DateTime.fromMillis(Date.parse(obj[field]));

    if (!date.isValid) {
      throw new Error(`Field ${field} is not a valid date`);
    }

    if (args.format) {
      return date.toUTC().toFormat(args.format);
    } else if (defaultFormat) {
      return date.toUTC().toFormat(defaultFormat);
    } else {
      return date.toUTC().toISO();
    }
  };
}
