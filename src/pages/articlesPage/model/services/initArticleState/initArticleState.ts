import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { ArticleSortFields, ArticleType } from '@/entities/article';
import { OrderType } from '@/shared/types/order';
import { articleActions } from '../../slice/ArticleSlice';
import { getArticleInited } from '../../selectors/getArticleState';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

export const initArticleState = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlePage/initArticleState',
  async (searchParams, { dispatch, getState }) => {
    const inited = getArticleInited(getState());

    if (!inited) {
      const searchFromUrl = searchParams.get('search');
      const sortFromUrl = searchParams.get('sort') as ArticleSortFields;
      const orderFromUrl = searchParams.get('order') as OrderType;
      const activeTypeFromUrl = searchParams.get('type') as ArticleType;

      if (searchFromUrl) {
        dispatch(articleActions.setSearchArticles(searchFromUrl));
      }

      if (orderFromUrl) {
        dispatch(articleActions.setOrderArticles(orderFromUrl));
      }

      if (sortFromUrl) {
        dispatch(articleActions.setSortArticles(sortFromUrl));
      }

      if (activeTypeFromUrl) {
        dispatch(articleActions.setActiveActiveType(activeTypeFromUrl));
      }

      dispatch(articleActions.initState());
      dispatch(fetchArticles({}));
    }
  },
);
