import type {DateTime} from './DateTime.js';

export const toRelativeTime = (date: DateTime) => date.toUnix() - date.startOf('day').toUnix();
