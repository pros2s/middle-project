import { FC, useState, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemesContext } from '../lib/ThemesContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

const ThemesProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemesContext.Provider value={defaultValue}>{children}</ThemesContext.Provider>;
};

export default ThemesProvider;
