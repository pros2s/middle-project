import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/article';
import { getOrderArticles } from 'features/orderArticles';
import { getSearchArticles } from 'features/searchArticles';
import { getSortArticles } from 'features/sortArticles';
import {
  getArticleLimit,
  getArticlePage,
} from '../../selectors/getArticleState';

interface fetchArticlesParams {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesParams,
  ThunkConfig<string>
>(
  'articlePage/fetchArticles',
  async ({ replace = false }, { rejectWithValue, extra, getState }) => {
    const limit = getArticleLimit(getState());
    const page = getArticlePage(getState());

    const sort = getSortArticles(getState());
    const order = getOrderArticles(getState());
    const search = getSearchArticles(getState());

    const params = replace
      ? {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
        }
      : {
          _expand: 'user',
          _page: page,
          _limit: limit,
        };

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params,
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
