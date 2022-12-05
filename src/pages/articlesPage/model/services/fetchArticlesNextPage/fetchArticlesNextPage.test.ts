import { ArticleSortFields, ArticleView } from 'entities/article';
import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { ArticleSchema } from '../../types/ArticleSchema';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleActions } from '../../slice/ArticleSlice';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';

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

describe('fetchArticlesNextPage.test', () => {
  test('succes fetch function call', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article,
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(thunk.dispatch).toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with !hasMore and isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article,
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with only !hasMore', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article,
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with only isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article,
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });
});
