import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  return useMemo(() => [isHover, { onMouseLeave, onMouseEnter }], []);
};
