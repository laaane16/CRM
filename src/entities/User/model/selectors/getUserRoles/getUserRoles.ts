import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers';
import { checkAvailableByRole } from '../../../../../shared/utils';

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
    return checkAvailableByRole(roles, neededRoles);
  },
);
