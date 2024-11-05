import {useEffect, useRef} from 'react';

export const useInterval = (callback: any, delay?: number) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== 0) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }

    return;
  }, [delay]);
};
