import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers';
import { checkAvailable } from '../../../../../app/providers/router/ui/AppRouter';

import { IRole } from '../../types/types';

export const getUserRoles = (state: StateSchema) => state.user.roles;

export const getAvailableByRole = createSelector(
  [
    getUserRoles,
    (state: StateSchema, neededRoles: IRole[]) => {
      return neededRoles;
    },
  ],
  (roles, neededRoles) => {
    return checkAvailable(roles, neededRoles);
  },
);
