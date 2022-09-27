import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

import { routesConfig } from '../config/routesConfig';

const RoutesProvider: FC = () => (
  <Routes>
    {Object.values(routesConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default RoutesProvider;
