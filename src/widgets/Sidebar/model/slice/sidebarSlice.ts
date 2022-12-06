import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SidebarSchema } from '../types/SidebarSchema';

const initialState: SidebarSchema = {
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCollapsed(state, { payload }: PayloadAction<boolean>) {
      state.collapsed = payload;
    },
  },
});

export const { actions: SidebarActions } = sidebarSlice;
export const { reducer: SidebarReducer } = sidebarSlice;
