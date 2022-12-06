import { memo, HTMLAttributes, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  active?: boolean;
}

export const Card = memo(
  ({ className, active, children, ...otherAttrubutes }: CardProps) => (
    <div
      className={classNames(cls.Card, [className], { [cls.active]: active })}
      {...otherAttrubutes}
    >
      {children}
    </div>
  ),
);
