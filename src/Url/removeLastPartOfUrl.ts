export const removeLastPartOfUrl = (url: string) => {
  const parts = url.split('/');
  parts.pop();
  return parts.join('/');
};
