import {getOwnerDocument} from './getOwnedDocument.js';

export function getActiveElement(node?: HTMLElement) {
  const doc = getOwnerDocument(node);
  return doc.activeElement as HTMLElement;
}
