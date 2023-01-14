import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileCanEdit = createSelector(
  getUserAuthData,
  getProfileData,
  (user, profile) => user.authData?.id === profile?.id,
);
