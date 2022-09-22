import { FC } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { Navbar } from 'widgets/Navbar';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App: FC = () => {
  const { theme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <RoutesProvieder />
    </div>
  );
};

export default App;
