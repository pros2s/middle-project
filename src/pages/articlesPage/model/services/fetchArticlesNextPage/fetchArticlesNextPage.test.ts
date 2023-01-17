import { ArticleSortFields, ArticleType, ArticleView } from '@/entities/article';
import { TestAsyncThunk } from '@/shared/lib/testHelpers/testAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articleActions } from '../../slice/ArticleSlice';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchArticlesNextPage.test', () => {
  test('succes fetch function call', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article: {
        hasMore: true,
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
        activeType: ArticleType.ALL,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(thunk.dispatch).toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with !hasMore and isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article: {
        hasMore: false,
        entities: {},
        ids: [],
        isLoading: true,
        page: 1,
        view: ArticleView.BIG,
        _inited: false,
        limit: 6,
        order: 'asc',
        search: '',
        sortType: ArticleSortFields.CREATEDAT,
        activeType: ArticleType.ALL,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with only !hasMore', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article: {
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
        activeType: ArticleType.ALL,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });

  test('error fetch with only isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      article: {
        hasMore: true,
        entities: {},
        ids: [],
        isLoading: true,
        page: 1,
        view: ArticleView.BIG,
        _inited: false,
        limit: 6,
        order: 'asc',
        search: '',
        sortType: ArticleSortFields.CREATEDAT,
        activeType: ArticleType.ALL,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.dispatch).not.toBeCalledWith(articleActions.setPage(2));
    expect(thunk.dispatch).not.toBeCalledWith(fetchArticles({}));
  });
});
