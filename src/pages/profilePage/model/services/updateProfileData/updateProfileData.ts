import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/profile';
import { ValidateProfileError } from 'entities/profile/model/types/ProfileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const newData = getProfileData(getState());

    const errors = validateProfileData(newData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', newData);

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
