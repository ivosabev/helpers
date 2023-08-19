import {getOwnerDocument} from './getOwnedDocument';
import {isHTMLElement} from './isHTMLElement';
import type {FocusableElement} from './types';

export function isActiveElement(element: FocusableElement) {
  const doc = isHTMLElement(element) ? getOwnerDocument(element) : document;
  return doc.activeElement === (element as HTMLElement);
}
