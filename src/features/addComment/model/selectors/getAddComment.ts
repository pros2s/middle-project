import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentError = (state: StateSchema) =>
  state.addComment?.errorMessage;
export const getAddCommentText = (state: StateSchema) => state.addComment?.text;
