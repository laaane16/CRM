export enum AppRoutes {
  MAIN = 'main',
  PEOPLE = 'people',
  LOGIN = 'login',
  NOT_FOUND = 'notFound',
}
export const AppPaths = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PEOPLE]: '/people',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
};
