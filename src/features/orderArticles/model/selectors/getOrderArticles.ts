import { StateSchema } from 'app/providers/StoreProvider';

export const getOrderArticles = (state: StateSchema) =>
  state.orderArticles?.order || 'asc';
