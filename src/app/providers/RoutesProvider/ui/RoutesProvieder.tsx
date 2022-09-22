import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routesConfig } from '../config/routesConfig';

const RoutesProvieder: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routesConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default RoutesProvieder;
