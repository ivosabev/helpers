import type {GraphQLResolveInfo} from 'graphql';
import {GraphQLBoolean, GraphQLInt, GraphQLNonNull} from 'graphql';
import {omit} from './omit.js';
import {paginatedConnectionFromArray} from './paginatedConnectionFromArray.js';

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
