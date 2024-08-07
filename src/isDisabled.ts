export function isDisabled(element: HTMLElement) {
  return Boolean(element.getAttribute('disabled')) === true || Boolean(element.getAttribute('aria-disabled')) === true;
}
