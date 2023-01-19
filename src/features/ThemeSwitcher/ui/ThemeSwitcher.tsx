import { memo, useMemo } from 'react';

import { Button, ButtonThemes } from '@/shared/ui/Button';

import { classNames } from '@/shared/lib/classNames/classNames';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import OrangeIcon from '@/shared/assets/icons/theme-orange.svg';
import { SVGIcon } from '@/shared/ui/SVGIcon';
import { useThemes } from '@/shared/lib/hooks/useThemes';
import { Themes } from '@/shared/consts/themes';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useThemes();

  const Component = useMemo(() => {
    let Comp;

    switch (theme) {
      case Themes.DARK:
        Comp = <SVGIcon Svg={DarkIcon} size={45} color='#16c316' />;
        break;
      case Themes.LIGHT:
        Comp = <SVGIcon Svg={LightIcon} size={45} color='#16c316' />;
        break;
      case Themes.ORANGE:
        Comp = <SVGIcon Svg={OrangeIcon} size={45} color='#cd9637' />;
        break;

      default:
        Comp = <SVGIcon Svg={LightIcon} size={45} color='#16c316' />;
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
