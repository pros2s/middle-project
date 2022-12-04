import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchArticles = (state: StateSchema) =>
  state.searchArticles?.searchValue;
