import { Themes, useThemes } from 'app/providers/ThemesProvider';

import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import OrangeIcon from 'shared/assets/icons/theme-orange.svg';
import { memo, useMemo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useThemes();

  const Component = useMemo(() => {
    let Comp;

    switch (theme) {
      case Themes.DARK:
        Comp = <DarkIcon />;
        break;
      case Themes.LIGHT:
        Comp = <LightIcon />;
        break;
      case Themes.ORANGE:
        Comp = <OrangeIcon />;
        break;

      default:
        Comp = <LightIcon />;
    }
    return Comp;
  }, [theme]);

  return (
    <Button
      className={classNames('', [className])}
      theme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
    >
      {Component}
    </Button>
  );
});
