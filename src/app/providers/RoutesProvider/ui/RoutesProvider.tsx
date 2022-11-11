import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps } from 'shared/lib/routes/routes';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

import { routesConfig } from '../config/routesConfig';

const RoutesProvider = memo(() => {
  const renderRoutes = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className='page-wrapper'>{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routesConfig).map(renderRoutes)}</Routes>;
});

export default RoutesProvider;
