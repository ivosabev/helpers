export function remap(source: Record<string, any>, map: Record<string, any>) {
  // sourceKey - 'Ref Id', destinationKey = 'refId'
  return Object.keys(map).reduce(
    (destination, sourceKey) => {
      const destinationKey = map[sourceKey];
      if (destinationKey) {
        const value = source[sourceKey] || source[destinationKey];
        if (typeof value !== 'undefined') {
          destination[destinationKey] = value;
        }
      }
      return destination;
    },
    {} as Record<string, any>
  );
}
