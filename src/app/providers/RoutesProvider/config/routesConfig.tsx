import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';

import { AppRoutes, RoutesPaths } from 'shared/lib/routes/routes';

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPaths.about,
    element: <AboutPage />,
  },
};
