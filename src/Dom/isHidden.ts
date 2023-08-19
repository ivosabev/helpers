export const isHidden = (element: HTMLElement): boolean => {
  return element.parentElement && isHidden(element.parentElement) ? true : element.hidden;
};
