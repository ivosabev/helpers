import {isHTMLElement} from './isHTMLElement.js';
import type {FocusableElement} from './types.js';

export function isInputElement(element: FocusableElement): element is HTMLInputElement {
  return isHTMLElement(element) && element.localName === 'input' && 'select' in element;
}
