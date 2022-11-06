import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mode } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
  INVERTED_CLEAR = 'clearInverted',
  CANCEL = 'cancel',
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
  isDisabled?: boolean;
  size?: ButtonSizes;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonThemes.OUTLINE,
    size = ButtonSizes.M,
    children,
    isDisabled,
    square,
    ...restProps
  } = props;

  const mods: Mode = {
    [cls.square]: square,
    [cls.disabled]: isDisabled,
  };

  return (
    <button
      type='button'
      disabled={isDisabled}
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
});
