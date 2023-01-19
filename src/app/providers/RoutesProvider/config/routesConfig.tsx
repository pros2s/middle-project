import { AboutPage } from '@/pages/aboutPage';
import { MainPage } from '@/pages/mainPage';
import { ProfilePage } from '@/pages/profilePage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { ArticlesPage } from '@/pages/articlesPage';
import { EditArticlePage } from '@/pages/editArticlePage';
import { CreateArticlePage } from '@/pages/createArticlePage';
import { ArticleDetailsPage } from '@/pages/articleDetailsPage';

import {
  AppRouteProps,
  AppRoutes,
  getMainRoute,
  getAboutRoute,
  getAdminRoute,
  getArticleByIdRoute,
  getArticleCreateRoute,
  getArticleEditRoute,
  getArticlesRoute,
  getForbiddenRoute,
  getProfileRoute,
} from '@/shared/lib/routes/routes';
import { AdminPanelPage } from '@/pages/adminPanelPage';
import { UserRoles } from '@/entities/user';
import { ForbiddenPage } from '@/pages/forbiddenPage';

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getAboutRoute(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getProfileRoute(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getArticlesRoute(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getArticleByIdRoute(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.EDIT_ARTICLE]: {
    path: getArticleEditRoute(':id'),
    element: <EditArticlePage />,
    authOnly: true,
  },
  [AppRoutes.CREATE_NEW_ARTICLE]: {
    path: getArticleCreateRoute(),
    element: <CreateArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getAdminRoute(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getForbiddenRoute(),
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
