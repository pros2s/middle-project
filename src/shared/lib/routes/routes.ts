export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};
