import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextThemes {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  theme = TextThemes.PRIMARY,
}) => (
  <div className={classNames(cls.Text, [className, cls[theme]])}>
    {title && <h1 className={cls.title}>{title}</h1>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
);
