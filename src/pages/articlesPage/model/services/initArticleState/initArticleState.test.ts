import { ArticleView } from 'entities/article';
import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleActions } from '../../slice/ArticleSlice';
import { initArticleState } from './initArticleState';

jest.mock('../fetchArticles/fetchArticles');

describe('initArticleState.test', () => {
  test('succes fetch function call', async () => {
    const thunk = new TestAsyncThunk(initArticleState, {
      article: {
        hasMore: true,
        entities: {},
        ids: [],
        isLoading: false,
        page: 1,
        view: ArticleView.BIG,
        _inited: false,
        limit: 6,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(thunk.dispatch).toBeCalledWith(articleActions.initState());
    expect(thunk.dispatch).toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with inited', async () => {
    const thunk = new TestAsyncThunk(initArticleState, {
      article: {
        hasMore: false,
        entities: {},
        ids: [],
        isLoading: true,
        page: 1,
        view: ArticleView.BIG,
        _inited: true,
        limit: 6,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.initState());
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });
});
