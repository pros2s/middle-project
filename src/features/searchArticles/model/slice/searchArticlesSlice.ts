import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchArticlesSchema } from '../types/SearchArticlesSchema';

const initialState: SearchArticlesSchema = {
  searchValue: '',
};

const searchArticlesSlice = createSlice({
  name: 'searchArticles',
  initialState,
  reducers: {
    setSearchArticles(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});

export const { actions: searchArticlesActions } = searchArticlesSlice;
export const { reducer: searchArticlesReducer } = searchArticlesSlice;
