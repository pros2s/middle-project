import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useThemes();

  return (
    <div className={classNames('app', [theme], {})}>
      <button onClick={toggleTheme}>Toggle theme </button>
      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>ABOUT</Link>

      <RoutesProvieder />
    </div>
  );
};

export default App;
