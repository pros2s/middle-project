import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  callback?: () => void;
  trigger: MutableRefObject<HTMLElement>;
  wrapper: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  wrapper,
  trigger,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapper.current;
    const triggerElement = trigger.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, trigger, wrapper]);
}
