import {getOwnerDocument} from './getOwnedDocument.js';
import {isHTMLElement} from './isHTMLElement.js';
import type {FocusableElement} from './types.js';

export function isActiveElement(element: FocusableElement) {
  const doc = isHTMLElement(element) ? getOwnerDocument(element) : document;
  return doc.activeElement === (element as HTMLElement);
}
