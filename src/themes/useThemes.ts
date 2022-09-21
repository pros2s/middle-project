import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemesContext } from './ThemesContext';

interface UseThemesResults {
  toggleTheme: () => void;
  theme: Themes;
}

export const useThemes = (): UseThemesResults => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => {
    const currentTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    setTheme(currentTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  };

  return { theme, toggleTheme };
};
