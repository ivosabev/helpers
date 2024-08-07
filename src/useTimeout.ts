import {useEffect, useState} from 'react';

export const useTimeout = (duration: number) => {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setTimedOut(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return timedOut;
};
