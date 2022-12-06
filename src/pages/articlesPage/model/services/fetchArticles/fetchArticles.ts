import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/article';
import { setQueryParams } from 'shared/lib/url/setQueryParams/setQueryParams';
import {
  getArticleActiveType,
  getArticleLimit,
  getArticleOrder,
  getArticlePage,
  getArticleSearch,
  getArticleSort,
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
  async (_, { rejectWithValue, extra, getState }) => {
    const limit = getArticleLimit(getState());
    const page = getArticlePage(getState());

    const sort = getArticleSort(getState());
    const order = getArticleOrder(getState());
    const search = getArticleSearch(getState());
    const activeType = getArticleActiveType(getState());

    try {
      setQueryParams({ sort, order, search, type: activeType });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
        },
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
