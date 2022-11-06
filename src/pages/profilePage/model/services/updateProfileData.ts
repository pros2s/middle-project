import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/profile';
import { getProfileData } from '../selectors/getProfileData/getProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const newData = getProfileData(getState());

      const response = await extra.api.put<Profile>('/profile', newData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
