import {getDirective, MapperKind, mapSchema} from '@graphql-tools/utils';
import type {GraphQLSchema} from 'graphql';
import {defaultFieldResolver} from 'graphql';

export const applyDirectives = (schema: GraphQLSchema, directivesMap: Record<string, Function>) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const resolve = Object.keys(directivesMap).reduce((p, directiveName) => {
        const hasDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
        const directive = directivesMap[directiveName] || p;
        return hasDirective ? directive(p) : p;
      }, fieldConfig.resolve || defaultFieldResolver);
      return {
        ...fieldConfig,
        resolve,
      };
    },
  });
};
