import { RefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
  wrapRef: RefObject<HTMLElement>;
  elRef: RefObject<HTMLElement>;
  callback: () => void;
}

export const useInfiniteScroll = ({ wrapRef, elRef, callback }: UseInfiniteScrollProps) => {
  useEffect(() => {
    const wrap = wrapRef.current;
    const element = elRef.current;

    if (!wrap || !element) {
      return;
    }

    const options = {
      root: wrap,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(([entity]) => {
      if (entity.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(element);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [wrapRef, elRef]);
};
