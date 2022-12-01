import { memo, Suspense, useEffect } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getInited, userActions } from 'entities/user';
import { useSelector } from 'react-redux';

const App = memo(() => {
  const { theme } = useThemes();
  const dispatch = useAppDispatch();

  const inited = useSelector(getInited);

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='app__content'>
          <Sidebar />
          {inited && <RoutesProvieder />}
        </div>
      </Suspense>
    </div>
  );
});

export default App;
