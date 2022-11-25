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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state) => {
  //       state.errorMessage = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state) => {
  //       state.errorMessage = undefined;
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, { payload }) => {
  //       state.errorMessage = payload;
  //       state.isLoading = false;
  //     });
  // },
});

export const { actions: addCommentActions } = AddCommentSlice;
export const { reducer: addCommentReducer } = AddCommentSlice;
