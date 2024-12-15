import {useEffect, useRef} from 'react';
import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect.js';

export const useInterval = (callback: any, delay?: number) => {
  const savedCallback = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'undefined' || delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
};
