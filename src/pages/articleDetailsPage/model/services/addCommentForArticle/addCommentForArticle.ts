import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleData } from '@/entities/article';
import { Comment } from '@/entities/comment';
import { getUserAuthData } from '@/entities/user';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { rejectWithValue, extra, getState, dispatch }) => {
    const article = getArticleData(getState());
    const user = getUserAuthData(getState());

    if (!article || !user) {
      return rejectWithValue('error with request data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId: article?.id,
        userId: user.authData?.id,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
