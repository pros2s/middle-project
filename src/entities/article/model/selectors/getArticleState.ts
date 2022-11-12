import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading;
export const getArticleErrorMessage = (state: StateSchema) =>
  state.articleDetails?.errorMessage;
export const getArticleData = (state: StateSchema) =>
  state.articleDetails?.data;
