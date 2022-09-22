import { FC } from 'react';

import { Themes, useThemes } from 'app/providers/ThemesProvider';

import { Button } from 'widgets/Button';
import { ButtonThemes } from 'widgets/Button/ui/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemes();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, [className])}
      theme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Themes.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
