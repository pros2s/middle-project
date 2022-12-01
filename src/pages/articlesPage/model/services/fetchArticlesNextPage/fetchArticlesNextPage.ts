import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articleActions } from '../../slice/ArticleSlice';
import {
  getArticleHasMore,
  getArticleIsLoading,
  getArticlePage,
} from '../../selectors/getArticleState';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

export const fetchArticlesNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlePage/fetchArticlesNextPage', async (_, { dispatch, getState }) => {
  const isLoading = getArticleIsLoading(getState());
  const page = getArticlePage(getState());
  const hasMore = getArticleHasMore(getState());

  if (hasMore && !isLoading) {
    dispatch(articleActions.setPage(page + 1));
    dispatch(fetchArticles({ page: page + 1 }));
  }
});
