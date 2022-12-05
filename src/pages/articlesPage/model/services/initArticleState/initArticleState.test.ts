import { ArticleSortFields, ArticleView } from 'entities/article';
import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleActions } from '../../slice/ArticleSlice';
import { initArticleState } from './initArticleState';
import { ArticleSchema } from '../../types/ArticleSchema';

jest.mock('../fetchArticles/fetchArticles');

const article: ArticleSchema = {
  hasMore: false,
  entities: {},
  ids: [],
  isLoading: false,
  page: 1,
  view: ArticleView.BIG,
  _inited: false,
  limit: 6,
  order: 'asc',
  search: '',
  sortType: ArticleSortFields.CREATEDAT,
};

describe('initArticleState.test', () => {
  test('succes fetch function call', async () => {
    const thunk = new TestAsyncThunk(initArticleState, {
      article,
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(7);
    expect(thunk.dispatch).toBeCalledWith(articleActions.initState());
    expect(thunk.dispatch).toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with inited', async () => {
    const thunk = new TestAsyncThunk(initArticleState, {
      article,
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.initState());
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });
});
