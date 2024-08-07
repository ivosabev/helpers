export const buildUrl = (queries: Record<string, any>) => {
  const {location} = window;
  const url = new URL(location.href);
  Object.entries(queries).forEach(([key, value]) => {
    url.searchParams.delete(key);
    url.searchParams.append(key, value);
  });
  return `${url.pathname}${url.search}${url.hash}`;
};
