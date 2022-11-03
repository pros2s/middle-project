import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from 'entities/profile';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  errorMessage: undefined,
  isLoading: false,
  readonly: false,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.errorMessage = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, { payload }: PayloadAction<Profile>) => {
          state.data = payload;
          state.errorMessage = undefined;
          state.isLoading = false;
        },
      )
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
