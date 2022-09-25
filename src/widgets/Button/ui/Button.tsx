import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...restProps } = props;

  return (
    <button className={classNames(cls.Button, [className, cls[theme]])} {...restProps}>
      {children}
    </button>
  );
};
