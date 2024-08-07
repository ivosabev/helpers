import type {DateTime} from './index.js';

export const toRelativeTime = (date: DateTime) => date.toUnix() - date.startOf('day').toUnix();
