import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'end' | 'center' | 'between';
type FlexAlign = 'start' | 'end' | 'center';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  between: cls.justifyBetween,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  start: cls.justifyStart,
};

const alignClasses: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  end: cls.alignEnd,
  start: cls.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
  column: cls.directionColumn,
  row: cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  '16': cls.gap16,
  '32': cls.gap32,
  '4': cls.gap4,
  '8': cls.gap8,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface FlexProps extends DivProps {
  className?: string;
  children?: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
}

export const Flex = ({
  className,
  align = 'start',
  children,
  direction = 'row',
  justify = 'start',
  gap = '4',
}: FlexProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  return <div className={classNames(cls.Flex, classes)}>{children}</div>;
};
