import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderType } from 'shared/types/order';
import { OrderArticlesSchema } from '../types/OrderArticlesSchema';

const initialState: OrderArticlesSchema = {
  order: 'asc',
};

const orderArticlesSlice = createSlice({
  name: 'orderArticles',
  initialState,
  reducers: {
    setOrderArticles(state, { payload }: PayloadAction<OrderType>) {
      state.order = payload;
    },
  },
});

export const { actions: orderArticlesActions } = orderArticlesSlice;
export const { reducer: orderArticlesReducer } = orderArticlesSlice;
