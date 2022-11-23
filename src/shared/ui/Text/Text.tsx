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

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextThemes.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  }: TextProps) => {
    const additionalClasses: Array<string | undefined> = [
      className,
      cls[size],
      cls[theme],
      cls[align],
    ];
    
    return (
      <div className={classNames(cls.Text, additionalClasses)}>
        {title && <h1 className={cls.title}>{title}</h1>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  },
);
