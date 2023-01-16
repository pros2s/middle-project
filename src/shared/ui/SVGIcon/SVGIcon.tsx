import { memo, ReactElement, SVGProps } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SVGIcon.module.scss';

interface SVGIconProps {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  invertedColor?: boolean;
}

export const SVGIcon = memo(
  ({ className, Svg, invertedColor }: SVGIconProps) => (
    <Svg
      className={classNames(invertedColor ? cls.invertedColor : cls.SVGIcon, [
        className,
      ])}
    />
  ),
);
