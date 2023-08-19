import type {GraphQLResolveInfo} from 'graphql';
import {GraphQLBoolean, GraphQLInt, GraphQLNonNull} from 'graphql';
import {connectionFromArray} from 'graphql-relay';
import {omit} from '../Object/omit';

export const paginationArgs = {
  limit: {
    type: GraphQLInt,
  },
  offset: {
    type: GraphQLInt,
  },
  page: {
    type: GraphQLInt,
  },
};

export const paginationFields = {
  end: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  hasNext: {
    type: new GraphQLNonNull(GraphQLBoolean),
  },
  hasPrev: {
    type: new GraphQLNonNull(GraphQLBoolean),
  },
  page: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  pages: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  start: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  total: {
    type: new GraphQLNonNull(GraphQLInt),
  },
};

export const paginatedConnectionFromPromisedArray = async (fn: any, rawArgs: any, info?: GraphQLResolveInfo) => {
  // Clean values
  const DEFAULT_LIMIT = 50;
  const args = {
    ...rawArgs,
    limit: rawArgs.limit != null ? rawArgs.limit : DEFAULT_LIMIT,
    offset: rawArgs.limit ? (rawArgs.page ? (rawArgs.page - 1) * rawArgs.limit : rawArgs.offset || undefined) : undefined,
    page: rawArgs.page != null ? rawArgs.page : undefined,
  };

  // Get edges
  try {
    // TODO: Improve by check if we are only requesting total, then choose not to query for all records, but only for the count
    // const selections = info?.fieldNodes[0]?.selectionSet?.selections || [];
    // const selection = typeof selections !== 'undefined' && selections.length === 1 && selections[0];
    // const isCountOnly = selection && selection.kind !== 'InlineFragment' && selection.name.value === 'total';
    // console.log('isCountOnly', isCountOnly);
    // const records = isCountOnly ? [] : await fn(args);
    const records = await fn(args);
    const total = await fn({
      ...omit(args, ['limit', 'offset']),
      isCount: true,
    });

    return await paginatedConnectionFromArray(records, total, args);
  } catch (e) {
    console.log('Error', e);
  }
  return [];
};

export const paginatedConnectionFromArray = async (records: any[], total: number, rawArgs: any) => {
  // Clean values
  const DEFAULT_LIMIT = 50;
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
