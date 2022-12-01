import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/article';
import { getArticleLimit } from '../selectors/getArticleState';

interface fetchArticlesParams {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesParams,
  ThunkConfig<string>
>(
  'articlePage/fetchArticles',
  async ({ page = 1 }, { rejectWithValue, extra, getState }) => {
    const limit = getArticleLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: { _expand: 'user', _limit: limit, _page: page },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
