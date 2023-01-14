import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRoles } from '../../types/UserSchema';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const hasAdminRole = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoles.ADMIN)),
);
export const hasManagerRole = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoles.MANAGER)),
);
