import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { routesConfig } from '../config/routesConfig';

const RoutesProvider: FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('LOADING')}</div>}>
      <Routes>
        {Object.values(routesConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default RoutesProvider;
