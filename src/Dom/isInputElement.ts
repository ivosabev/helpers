import {isHTMLElement} from './isHTMLElement';
import type {FocusableElement} from './types';

export function isInputElement(element: FocusableElement): element is HTMLInputElement {
  return isHTMLElement(element) && element.localName === 'input' && 'select' in element;
}
