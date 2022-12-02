import { useCallback, useRef } from 'react';

export const useTrottle = (callback: () => void, delay: number) => {
  const trottleRef = useRef<boolean>(false);

  return useCallback(() => {
    if (!trottleRef.current) {
      callback();
      trottleRef.current = true;

      setTimeout(() => {
        trottleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
};
