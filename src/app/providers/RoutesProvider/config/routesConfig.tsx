import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { ProfilePage } from 'pages/profilePage';

import {
  AppRouteProps,
  AppRoutes,
  RoutesPaths,
} from 'shared/lib/routes/routes';
import { NotFoundPage } from 'pages/notFoundPage';
import { ArticlesPage } from 'pages/articlesPage';
import ArticleDetailsPage from 'pages/articleDetailsPage/ui/ArticleDetailsPage';

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutesPaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutesPaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutesPaths.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPaths.notFound,
    element: <NotFoundPage />,
  },
};
