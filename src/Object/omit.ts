// SOURCE: https://gist.github.com/KonradSzwarc/f42d187532ec0b4cae81c9fa0ade48f6

export const omit = <T extends Record<string, unknown>, K extends [...(keyof T)[]]>(
  originalObject: T,
  keysToOmit: K,
): {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
} => {
  const clonedObject = {...originalObject};

  for (const path of keysToOmit) {
    delete clonedObject[path];
  }

  return clonedObject;
};
