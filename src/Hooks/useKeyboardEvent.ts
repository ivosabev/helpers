import {useEffect} from 'react';

export const useKeyboardEvent = (key: string, callback: (e?: KeyboardEvent) => void) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback(e);
      }
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [callback, key]);
};
