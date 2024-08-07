export const getCurrentURL = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const {location} = window;
  return `${location.pathname}${location.search}${location.hash}`;
};
