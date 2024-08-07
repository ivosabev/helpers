export const removeLastPartOfUrl = (url: string) => {
  const parts = url.split('/');
  const removedPart = parts.pop();
  // If url is ending with a slash, we need to pop again
  if (removedPart === '') {
    parts.pop();
  }
  return parts.join('/');
};
