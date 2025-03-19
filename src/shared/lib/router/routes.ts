export enum AppRoutes {
  MAIN = 'main',
  PEOPLE = 'people',
  LOGIN = 'login',
  PROFILE = 'profile',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'notFound',
}
export const AppPaths = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PEOPLE]: '/people',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};
