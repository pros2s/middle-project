import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/user';

export const getArticleLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading;
export const getArticleErrorMessage = (state: StateSchema) =>
  state.articleDetails?.errorMessage;
export const getArticleData = (state: StateSchema) =>
  state.articleDetails?.data;

export const canArticleEdit = createSelector(
  getArticleData,
  getUserAuthData,
  (data, user) => data?.user?.id === user.authData?.id,
);
