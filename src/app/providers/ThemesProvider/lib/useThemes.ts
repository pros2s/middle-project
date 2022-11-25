import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Themes,
  ThemesContext,
} from './ThemesContext';

interface UseThemesResults {
  toggleTheme: () => void;
  theme: Themes;
}

export const useThemes = (): UseThemesResults => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => {
    let currentTheme: Themes;
    switch (theme) {
      case Themes.DARK:
        currentTheme = Themes.LIGHT;
        break;
      case Themes.LIGHT:
        currentTheme = Themes.ORANGE;
        break;
      case Themes.ORANGE:
        currentTheme = Themes.DARK;
        break;

      default:
        currentTheme = Themes.LIGHT;
    }

    setTheme?.(currentTheme);
    document.body.className = currentTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  };

  return { theme: theme || Themes.LIGHT, toggleTheme };
};
