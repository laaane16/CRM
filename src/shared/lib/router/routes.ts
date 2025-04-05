export enum AppRoutes {
  MAIN = 'main',
  PEOPLE = 'people',
  LOGIN = 'login',
  PROFILE = 'profile',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'notFound',
}

export const getMainRoutePath = (): string => '/';
export const getPeopleRoutePath = (): string => '/people';
export const getLoginRoutePath = (): string => '/login';
export const getProfileRoutePath = (id: string): string => `/profile/${id}`;
export const getAdminRoutePath = (): string => '/admin';
export const getForbiddenRoutePath = (): string => '/forbidden';
export const getNotFoundRoutePath = (): string => '/*';
