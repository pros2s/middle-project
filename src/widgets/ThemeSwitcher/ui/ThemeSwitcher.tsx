import { Themes, useThemes } from 'app/providers/ThemesProvider';

import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
});
