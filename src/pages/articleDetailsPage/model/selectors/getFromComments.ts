import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsLoadingFromComments = (state: StateSchema) =>
  state.articleComments?.isLoading;
export const getErrorMessageFromComments = (state: StateSchema) =>
  state.articleComments?.errorMessage;
