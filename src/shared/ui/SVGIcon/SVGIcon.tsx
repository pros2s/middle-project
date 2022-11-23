import { memo, ReactElement, SVGProps } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SVGIcon.module.scss';

interface SVGIconProps {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
}

export const SVGIcon = memo(({ className, Svg }: SVGIconProps) => (
  <Svg className={classNames(cls.SVGIcon, [className])} />
));
