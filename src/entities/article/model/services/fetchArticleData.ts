import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../types/Article';

export const fetchArticleData = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>('profile/fetchArticleData', async (articleId, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`, {
      params: { _expand: 'user' },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
