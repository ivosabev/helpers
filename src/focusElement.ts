import {type FocusableElement} from './FocusableElement.js';
import {getOwnerDocument} from './getOwnedDocument.js';
import {isActiveElement} from './isActiveElement.js';
import {isInputElement} from './isInputElement.js';

export interface ExtendedFocusOptions extends FocusOptions {
  /**
   * Function that determines if the element is the active element
   */
  isActive?: typeof isActiveElement;
  /**
   * If true, the element will be focused in the next tick
   */
  nextTick?: boolean;
  /**
   * If true and element is an input element, the input's text will be selected
   */
  selectTextIfInput?: boolean;
}

export function focusElement(element: FocusableElement | null, options: ExtendedFocusOptions = {}) {
  const {isActive = isActiveElement, nextTick, preventScroll = true, selectTextIfInput = true} = options;

  if (!element || isActive(element)) return -1;

  function triggerFocus() {
    if (!element) {
      // warn({
      //   condition: true,
      //   message: "[chakra-ui]: can't call focus() on `null` or `undefined` element",
      // });
      return;
    }
    if (supportsPreventScroll()) {
      element.focus({preventScroll});
    } else {
      element.focus();
      if (preventScroll) {
        const scrollableElements = getScrollableElements(element as HTMLElement);
        restoreScrollPosition(scrollableElements);
      }
    }

    if (selectTextIfInput) {
      if (isInputElement(element)) {
        element.select();
      } else if ('setSelectionRange' in element) {
        const el = element as HTMLInputElement | HTMLTextAreaElement;
        el.setSelectionRange(el.value.length, el.value.length);
      }
    }
  }

  if (nextTick) {
    return requestAnimationFrame(triggerFocus);
  }

  triggerFocus();
  return -1;
}

let supportsPreventScrollCached: boolean | null = null;
function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;
    try {
      const div = document.createElement('div');
      div.focus({
        get preventScroll() {
          supportsPreventScrollCached = true;
          return true;
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // Ignore
    }
  }

  return supportsPreventScrollCached;
}

interface ScrollableElement {
  element: HTMLElement;
  scrollTop: number;
  scrollLeft: number;
}

function getScrollableElements(element: HTMLElement): ScrollableElement[] {
  const doc = getOwnerDocument(element);
  const win = doc.defaultView ?? window;
  let parent = element.parentNode;
  const scrollableElements: ScrollableElement[] = [];
  const rootScrollingElement = doc.scrollingElement || doc.documentElement;

  while (parent instanceof win.HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollLeft: parent.scrollLeft,
        scrollTop: parent.scrollTop,
      });
    }
    parent = parent.parentNode;
  }

  if (rootScrollingElement instanceof win.HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollLeft: rootScrollingElement.scrollLeft,
      scrollTop: rootScrollingElement.scrollTop,
    });
  }

  return scrollableElements;
}

function restoreScrollPosition(scrollableElements: ScrollableElement[]) {
  scrollableElements.forEach(({element, scrollLeft, scrollTop}) => {
    element.scrollTop = scrollTop;

    element.scrollLeft = scrollLeft;
  });
}
