// Based on https://github.com/uidotdev/usehooks, with changes to the initial state

import React from 'react';
import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect.js';

export function useWindowSize() {
  const [size, setSize] = React.useState<{height: number; width: number; viewportWidth?: number; viewportHeight?: number}>({
    height: typeof window !== 'undefined' ? window.screen.height : 0,
    viewportHeight: typeof window !== 'undefined' ? window.visualViewport?.height : 0,
    viewportWidth: typeof window !== 'undefined' ? window.visualViewport?.width : 0,
    width: typeof window !== 'undefined' ? window.screen.width : 0,
  });

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        viewportHeight: window.visualViewport?.height,
        viewportWidth: window.visualViewport?.width,
        width: window.innerWidth,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
