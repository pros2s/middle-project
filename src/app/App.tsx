import { FC, Suspense, useEffect } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { userActions } from 'eNtities/user';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const App: FC = () => {
  const { theme } = useThemes();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

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
