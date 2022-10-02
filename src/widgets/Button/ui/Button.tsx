import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  INVERTED_BACKGROUND = 'backgroundInverted',
}

export enum ButtonSizes {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
  square?: boolean;
  size?: ButtonSizes;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, size, children, square, ...restProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type='button'
      className={classNames(
        cls.Button,
        [className, cls[theme], cls[size]],
        mods,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
