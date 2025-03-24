import { IRole } from '../../../entities/User';

export const checkAvailableByRole = (userRoles: IRole[], roles: IRole[]) => {
  const isAvailable = userRoles.some((i) => {
    const isAvailable = roles.includes(i);
    if (isAvailable) {
      return true;
    }
  });
  return isAvailable;
};
