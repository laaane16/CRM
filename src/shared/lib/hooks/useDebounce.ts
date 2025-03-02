/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

export const useDebounce = (callblack: (...args: any[]) => void, delay: number) => {
  const debounced = useRef<any>(null);

  return useCallback((...args: any[]) => {
    clearTimeout(debounced.current);
    const timeoutFn = setTimeout(() => {
      callblack(...args);
    }, delay);

    debounced.current = timeoutFn;
  }, []);
};
