import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { Comment } from 'entities/comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data: Comment[] = [
  { id: '1', text: 'Comment text', user: { id: '1', username: 'username' } },
  {
    id: '2',
    text: 'Comment text 2',
    user: { id: '2', username: 'username 2' },
  },
];

describe('fetchCommentsByArticleId.test', () => {
  test('succes fetch function call', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });

  test('error 403 with fetch function call', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
