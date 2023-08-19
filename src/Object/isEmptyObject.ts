export const isEmptyObject = (obj: Record<string, any>): obj is {} => {
  for (const i in obj) {
    return false;
  }
  return true;
};
