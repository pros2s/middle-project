import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapper = useRef() as MutableRefObject<HTMLDivElement>;
  const trigger = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    trigger,
    wrapper,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapper} className={classNames(cls.Page, [className], {})}>
      {children}
      <div ref={trigger} className={cls.trigger} />
    </section>
  );
});
