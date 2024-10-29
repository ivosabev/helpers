import {type DateTime} from 'luxon';

export const toDateTimeOrUndefined = (dt: DateTime) => (dt && dt.isValid ? dt : undefined);
