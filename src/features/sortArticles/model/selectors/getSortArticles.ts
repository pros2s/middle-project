import { StateSchema } from 'app/providers/StoreProvider';

export const getSortArticles = (state: StateSchema) =>
  state.sortArticles?.sortType;
