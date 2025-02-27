import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTrottle = (callback: (...args: any[]) => void, delay: number) => {
  const isTrottle = useRef(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useCallback((...args: any[]) => {
    if (isTrottle.current) {
      isTrottle.current = false;

      callback(...args);

      setTimeout(() => {
        isTrottle.current = true;
      }, delay);
    }
  }, []);
};
