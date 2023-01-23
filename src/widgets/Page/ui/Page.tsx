import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useFetchEffect } from '@/shared/lib/hooks/useFetchEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { getScrollPositionByPath } from '../model/selectors/getScrollPosition';
import cls from './Page.module.scss';
import { scrollPositionActions } from '../model/slice/scrollPositionSlice';
import { Test } from '@/shared/types/tests';

interface PageProps extends Test {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname),
  );

  const wrapper = useRef() as MutableRefObject<HTMLDivElement>;
  const trigger = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    trigger,
    wrapper,
    callback: onScrollEnd,
  });

  useFetchEffect(() => {
    wrapper.current.scrollTop = scrollPosition;
  });

  const onScroll = useTrottle(() => {
    dispatch(
      scrollPositionActions.setScrollPosition({
        path: pathname,
        scrollPosition: wrapper.current.scrollTop,
      }),
    );
  }, 500);

  return (
    <main
      // eslint-disable-next-line react/destructuring-assignment
      data-testid={props['data-testid'] ?? 'Page'}
      ref={wrapper}
      className={classNames(cls.Page, [className], {})}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && <div ref={trigger} className={cls.trigger} />}
    </main>
  );
};
