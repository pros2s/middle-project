import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile/model/types/ProfileSchema';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: false,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
