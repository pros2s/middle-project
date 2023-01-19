import { memo, Suspense, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getInited, userActions } from '@/entities/user';
import { Flex } from '@/shared/ui/Stack';
import { useThemes } from '@/shared/lib/hooks/useThemes';
import { RoutesProvieder } from './providers/RoutesProvider';

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

        <Flex>
          <Sidebar />
          {inited && <RoutesProvieder />}
        </Flex>
      </Suspense>
    </div>
  );
});

export default App;
