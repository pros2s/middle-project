import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { AddCommentSchema } from '../types/AddCommentSchema';

const initialState: AddCommentSchema = {
  errorMessage: undefined,
  text: '',
};

const AddCommentSlice = buildSlice({
  name: 'addComment',
  initialState,
  reducers: {
    setCommentText(state, { payload }: PayloadAction<string>) {
      state.text = payload;
    },
  },
});

export const {
  actions: addCommentActions,
  reducer: addCommentReducer,
  useActions: useCommentActions,
} = AddCommentSlice;
