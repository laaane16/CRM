export enum AppRoutes {
  MAIN = 'main',
  PEOPLE = 'people',
  LOGIN = 'login',
  NOT_FOUND = '*',
}
export const AppPaths = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.PEOPLE]: '/people',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
};
