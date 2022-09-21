import { useContext } from 'react';
import { Themes, ThemesContext } from './ThemesContext';

interface UseThemesResults {
  toggleTheme: () => void;
  theme: Themes;
}

export const useThemes = (): UseThemesResults => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => {
    setTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK);
  };

  return { theme, toggleTheme };
};
