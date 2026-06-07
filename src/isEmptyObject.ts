export const isEmptyObject = (obj: Record<string, unknown>): obj is Record<string, never> => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};
