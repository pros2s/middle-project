import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentError, getAddCommentText } from './getAddComment';

describe('getAddComment', () => {
  test('should return error message', () => {
    const state: DeepPartial<StateSchema> = {
      addComment: {
        errorMessage: 'error',
      },
    };

    expect(getAddCommentError(state as StateSchema)).toEqual('error');
  });
  test('should return comment text', () => {
    const state: DeepPartial<StateSchema> = {
      addComment: {
        text: 'comment text',
      },
    };
    expect(getAddCommentText(state as StateSchema)).toEqual('comment text');
  });
});
