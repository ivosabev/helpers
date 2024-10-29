import {type FocusableElement} from './FocusableElement.js';
import {getOwnerDocument} from './getOwnedDocument.js';
import {isHTMLElement} from './isHTMLElement.js';

export function isActiveElement(element: FocusableElement) {
  const doc = isHTMLElement(element) ? getOwnerDocument(element) : document;
  return doc.activeElement === (element as HTMLElement);
}
