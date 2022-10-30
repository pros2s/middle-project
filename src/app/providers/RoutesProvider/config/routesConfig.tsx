import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { ProfilePage } from 'pages/profilePage';

import { AppRoutes, RoutesPaths } from 'shared/lib/routes/routes';
import { NotFoundPage } from 'pages/notFoundPage';

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutesPaths.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPaths.notFound,
    element: <NotFoundPage />,
  },
};
