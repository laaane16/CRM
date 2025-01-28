export enum AppRoutes {
  MAIN = 'main',
  PEOPLE = 'people',
  LOGIN = 'login',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}
export const AppPaths = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PEOPLE]: '/people',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};
