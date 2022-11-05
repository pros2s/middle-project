import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextThemes {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
  align?: TextAlign;
}

export const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextThemes.PRIMARY,
    align = TextAlign.LEFT,
  }: TextProps) => (
    <div className={classNames(cls.Text, [className, cls[theme], cls[align]])}>
      {title && <h1 className={cls.title}>{title}</h1>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  ),
);
