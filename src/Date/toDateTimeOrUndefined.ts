import {DateTime} from '.';

export const toDateTimeOrUndefined = (dt: DateTime) => (dt && dt.isValid ? dt : undefined);
