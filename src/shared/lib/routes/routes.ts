import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { UserRoles } from '@/entities/user';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile', // + id
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails', // + id
  EDIT_ARTICLE = 'editArticle',
  CREATE_NEW_ARTICLE = 'createNewArticle',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'notFound',
}

export const getMainRoute = () => '/';
export const getAboutRoute = () => '/about';
export const getProfileRoute = (id: string) => `/profile/${id}`;
export const getArticlesRoute = () => '/articles';
export const getArticleByIdRoute = (id: string) => `/articles/${id}`;
export const getArticleEditRoute = (id: string) => `/articles/${id}/edit`;
export const getArticleCreateRoute = () => '/articles/create';
export const getAdminRoute = () => '/admin';
export const getForbiddenRoute = () => '/forbidden';
