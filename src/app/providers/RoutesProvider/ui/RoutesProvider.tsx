import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routesConfig } from '../config/routesConfig';

const RoutesProvider: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routesConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
      ))}
    </Routes>
  </Suspense>
);

export default RoutesProvider;
