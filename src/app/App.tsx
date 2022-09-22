import { FC } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { Navbar } from 'widgets/Navbar';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <RoutesProvieder />
      <button onClick={toggleTheme}>Toggle theme </button>
    </div>
  );
};

export default App;
