import { memo, ReactElement, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SVGIcon.module.scss';

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  invertedColor?: boolean;
  size?: number;
}

export const SVGIcon = memo(
  ({ className, Svg, invertedColor, size, ...otherProps }: SVGIconProps) => (
    <Svg
      className={classNames(invertedColor ? cls.invertedColor : cls.SVGIcon, [
        className,
      ])}
      width={size}
      height={size}
      {...otherProps}
    />
  ),
);
