import type {DateTime} from '.';

export const toRelativeTime = (date: DateTime) => date.toUnix() - date.startOf('day').toUnix();
