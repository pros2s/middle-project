import { createContext } from 'react';
import { Themes } from '@/shared/consts/themes';

export interface ThemesContextProps {
  theme?: Themes;
  setTheme?: (theme: Themes) => void;
}

export const ThemesContext = createContext<ThemesContextProps>({});
