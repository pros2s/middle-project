import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/Article';
import { fetchArticleData } from '../services/fetchArticleData';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  errorMessage: undefined,
  isLoading: false,
};

const ArticleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleData.pending, (state) => {
        state.errorMessage = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleData.fulfilled,
        (state, { payload }: PayloadAction<Article>) => {
          state.data = payload;
          state.errorMessage = undefined;
          state.isLoading = false;
        },
      )
      .addCase(
        fetchArticleData.rejected,
        (state, { payload }: PayloadAction<string | undefined>) => {
          state.errorMessage = payload;
          state.isLoading = false;
        },
      );
  },
});

export const { actions: articleDetailsActions } = ArticleDetailsSlice;
export const { reducer: articleDetailsReducer } = ArticleDetailsSlice;
