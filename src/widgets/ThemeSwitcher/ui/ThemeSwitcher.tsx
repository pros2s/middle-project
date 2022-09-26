import { FC } from 'react';

import { Themes, useThemes } from 'app/providers/ThemesProvider';

import { Button } from 'widgets/Button';
import { ButtonThemes } from 'widgets/Button/ui/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemes();

  return (
    <Button
      className={classNames('', [className])}
      theme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Themes.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
