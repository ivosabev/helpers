export function containsElement(parent: HTMLElement | null, child: HTMLElement) {
  return parent ? parent === child || parent.contains(child) : false;
}
