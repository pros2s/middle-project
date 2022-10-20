import { FC, useState, useMemo } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Themes,
  ThemesContext,
} from '../lib/ThemesContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

interface ThemesProviderProps {
  initialTheme?: Themes;
}

const ThemesProvider: FC<ThemesProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Themes>(initialTheme || defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemesContext.Provider value={defaultValue}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
