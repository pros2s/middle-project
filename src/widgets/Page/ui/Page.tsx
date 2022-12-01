import { memo, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo(({ className, children }: PageProps) => (
  <div className={classNames(cls.Page, [className])}>{children}</div>
));
