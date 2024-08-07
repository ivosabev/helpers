import {isElement} from './isElement.js';

export function getOwnerDocument(node?: Element | null): Document {
  return isElement(node) ? (node.ownerDocument ?? document) : document;
}
