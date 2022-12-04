import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articleActions } from '../../slice/ArticleSlice';
import { getArticleInited } from '../../selectors/getArticleState';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

export const initArticleState = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlePage/initArticleState', async (_, { dispatch, getState }) => {
  const inited = getArticleInited(getState());

  if (!inited) {
    dispatch(articleActions.initState());
    dispatch(fetchArticles({}));
  }
});
