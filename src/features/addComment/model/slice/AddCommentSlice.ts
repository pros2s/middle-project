import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../types/AddCommentSchema';

const initialState: AddCommentSchema = {
  errorMessage: undefined,
  text: '',
};

const AddCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setCommentText(state, { payload }: PayloadAction<string>) {
      state.text = payload;
    },
  },
});

export const { actions: addCommentActions } = AddCommentSlice;
export const { reducer: addCommentReducer } = AddCommentSlice;
