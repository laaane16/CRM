export enum AppRoutes {
  MAIN = 'main',
  PEOPLE = 'people',
  NOT_FOUND = '*',
}
export const AppPaths = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.PEOPLE]: '/people',
  [AppRoutes.NOT_FOUND]: '*',
};
