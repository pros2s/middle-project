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
  RoutesPaths,
} from '@/shared/lib/routes/routes';
import { AdminPanelPage } from '@/pages/adminPanelPage';
import { UserRoles } from '@/entities/user';
import { ForbiddenPage } from '@/pages/forbiddenPage';

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
  [AppRoutes.EDIT_ARTICLE]: {
    path: `${RoutesPaths.editArticle}`,
    element: <EditArticlePage />,
    authOnly: true,
  },
  [AppRoutes.CREATE_NEW_ARTICLE]: {
    path: `${RoutesPaths.createNewArticle}`,
    element: <CreateArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutesPaths.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutesPaths.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPaths.notFound,
    element: <NotFoundPage />,
  },
};
