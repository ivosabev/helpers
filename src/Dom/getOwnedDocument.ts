import {isElement} from './isElement';

export function getOwnerDocument(node?: Element | null): Document {
  return isElement(node) ? node.ownerDocument ?? document : document;
}
