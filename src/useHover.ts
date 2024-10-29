import {useMemo, useState} from 'react';

export const useHover = (): [
  boolean,
  {
    onMouseOut: () => void;
    onMouseOver: () => void;
  },
] => {
  const [state, setState] = useState<boolean>(false);

  const eventHandlers = useMemo(
    () => ({
      onMouseOut() {
        setState(false);
      },
      onMouseOver() {
        setState(true);
      },
    }),
    [],
  );

  return [state, eventHandlers];
};
