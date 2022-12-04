import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSortFields } from 'entities/article';
import { SortArticlesSchema } from '../types/SortArticlesSchema';

const initialState: SortArticlesSchema = {
  sortType: ArticleSortFields.CREATEDAT,
};

const sortArticlesSlice = createSlice({
  name: 'sortArticles',
  initialState,
  reducers: {
    setSortArticles(state, { payload }: PayloadAction<ArticleSortFields>) {
      state.sortType = payload;
    },
  },
});

export const { actions: sortArticlesActions } = sortArticlesSlice;
export const { reducer: sortArticlesReducer } = sortArticlesSlice;
