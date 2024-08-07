import type {DateTime} from './index.js';

export const toDateTimeOrUndefined = (dt: DateTime) => (dt && dt.isValid ? dt : undefined);
