import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile', // + id
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails', // + id
  EDIT_ARTICLE = 'editArticle',
  CREATE_NEW_ARTICLE = 'createNewArticle',
  NOT_FOUND = 'notFound',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',
  [AppRoutes.EDIT_ARTICLE]: '/articles/:id/edit',
  [AppRoutes.CREATE_NEW_ARTICLE]: '/articles/create',
  [AppRoutes.NOT_FOUND]: '*',
};
