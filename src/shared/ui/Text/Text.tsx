import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
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
  S = 'size_s',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const headerClasses: Record<TextSize, HeaderTagType> = {
  size_l: 'h1',
  size_m: 'h2',
  size_s: 'h3',
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

export const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextThemes.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = headerClasses[size];

    const additionalClasses: Array<string | undefined> = [
      className,
      cls[size],
      cls[theme],
      cls[align],
    ];

    return (
      <div className={classNames(cls.Text, additionalClasses)}>
        {title && (
          <HeaderTag className={cls.title} data-testid={`${dataTestId}.title`}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
