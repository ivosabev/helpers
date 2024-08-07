import merge from 'lodash/merge.js';

type TypeDefsAndResolvers = {typeDefs: any; resolvers: any};

export const mergeTypeDefsAndResolvers = (typeDefsAndResolvers: TypeDefsAndResolvers[]) => {
  return typeDefsAndResolvers.reduce(
    (p, f) => ({
      resolvers: merge(f.resolvers ? [...p.resolvers, ...(Array.isArray(f.resolvers) ? f.resolvers : [f.resolvers])] : p.resolvers),
      typeDefs: f.typeDefs ? [...p.typeDefs, ...(Array.isArray(f.typeDefs) ? f.typeDefs : [f.typeDefs])] : p.typeDefs,
    }),
    {
      resolvers: [],
      typeDefs: [],
    },
  );
};
