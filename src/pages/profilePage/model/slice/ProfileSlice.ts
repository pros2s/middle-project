import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from 'entities/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  profileData: undefined,
  errorMessage: undefined,
  isLoading: false,
  readonly: true,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly(state, { payload }: PayloadAction<boolean>) {
      state.readonly = payload;
    },
    changeProfileData(state, { payload }: PayloadAction<Profile>) {
      state.profileData = { ...state.profileData, ...payload };
    },
    cancelChangeProfileData(state) {
      state.validation = undefined;
      state.readonly = true;
      state.profileData = state.data;
    },
  },
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
          state.profileData = payload;
          state.errorMessage = undefined;
          state.isLoading = false;
        },
      )
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validation = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, { payload }: PayloadAction<Profile>) => {
          state.data = payload;
          state.profileData = payload;
          state.validation = undefined;
          state.readonly = true;
          state.isLoading = false;
        },
      )
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.validation = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
