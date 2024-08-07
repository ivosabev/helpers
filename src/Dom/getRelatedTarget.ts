import {getActiveElement} from './getActiveElement.js';

export function getRelatedTarget(event: Pick<FocusEvent, 'relatedTarget' | 'target' | 'currentTarget'>) {
  const target = (event.target ?? event.currentTarget) as HTMLElement;
  const activeElement = getActiveElement(target);
  return (event.relatedTarget ?? activeElement) as HTMLElement;
}
