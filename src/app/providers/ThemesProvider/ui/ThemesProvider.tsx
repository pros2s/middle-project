import { FC, useState, useMemo, ReactNode } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localeStorage';
import { Themes } from '@/shared/consts/themes';
import { ThemesContext } from '@/shared/lib/context/ThemesContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

interface ThemesProviderProps {
  initialTheme?: Themes;
  children: ReactNode;
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
