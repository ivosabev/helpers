import {connectionFromArray} from 'graphql-relay';

export const paginatedConnectionFromArray = async (records: any[], total: number, rawArgs: any) => {
  // Clean values
  const DEFAULT_LIMIT = Infinity;
  const args = {
    ...rawArgs,
    limit: rawArgs.limit || DEFAULT_LIMIT,
    offset: rawArgs.limit ? (rawArgs.page ? (rawArgs.page - 1) * rawArgs.limit : rawArgs.offset || undefined) : undefined,
    page: rawArgs.page || undefined,
  };

  // Get edges
  const connection = connectionFromArray(records, args);

  // Get pageInfo
  const pages = args.limit ? Math.ceil(total / args.limit) : 1;
  const page = args.limit ? (args.offset || 0) / args.limit + 1 : 1;
  const start = total ? (args.offset || 0) + 1 : 0;
  const end = page * args.limit < total ? page * args.limit : total;
  const hasNext = page < pages;
  const hasPrev = page > 1;

  return {
    ...connection,
    end,
    hasNext,
    hasPrev,
    page,
    pages,
    start,
    total,
  };
};
