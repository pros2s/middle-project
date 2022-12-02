import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SrollSaveSchema } from '../types/SrollSaveSchema';

const initialState: SrollSaveSchema = {
  scroll: {},
};

const scrollPositionSlice = createSlice({
  name: 'scrollPosition',
  initialState,
  reducers: {
    setScrollPosition(
      state,
      { payload }: PayloadAction<{ path: string; scrollPosition: number }>,
    ) {
      state.scroll[payload.path] = payload.scrollPosition;
    },
  },
});

export const { actions: scrollPositionActions } = scrollPositionSlice;
export const { reducer: scrollPositionReducer } = scrollPositionSlice;
