import {type FocusableElement} from './FocusableElement.js';
import {isHTMLElement} from './isHTMLElement.js';

export function isInputElement(element: FocusableElement): element is HTMLInputElement {
  return isHTMLElement(element) && element.localName === 'input' && 'select' in element;
}
