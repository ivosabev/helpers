import {type DateTime} from 'luxon';

export const toRelativeTime = (date: DateTime) => date.toUnixInteger() - date.startOf('day').toUnixInteger();
