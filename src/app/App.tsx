import { FC, Suspense } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App: FC = () => {
  const { theme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <RoutesProvieder />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
