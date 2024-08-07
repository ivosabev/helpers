export function isElement(el: any): el is Element {
  return el != null && typeof el === 'object' && 'nodeType' in el && el.nodeType === Node.ELEMENT_NODE;
}
