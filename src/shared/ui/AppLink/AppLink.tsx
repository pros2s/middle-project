import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme: AppLinkTheme;
  className?: string;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    to,
    ...restProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
});
