import { createContext } from 'react';

export enum Themes {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme',
}

export interface ThemesContextProps {
  theme?: Themes;
  setTheme?: (theme: Themes) => void;
}

export const ThemesContext = createContext<ThemesContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
