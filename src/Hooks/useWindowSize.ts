// Based on https://github.com/uidotdev/usehooks, with changes to the initial state

import React from 'react';
import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect';

export function useWindowSize() {
  const [size, setSize] = React.useState<{height: number; width: number}>({
    height: typeof window !== 'undefined' ? window.screen.height : 0,
    width: typeof window !== 'undefined' ? window.screen.width : 0,
  });

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
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
