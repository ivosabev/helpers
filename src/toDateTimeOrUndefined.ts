import type {DateTime} from './DateTime.js';

export const toDateTimeOrUndefined = (dt: DateTime) => (dt && dt.isValid ? dt : undefined);
