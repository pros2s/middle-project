import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { LOCALE_STORAGE_USER_KEY } from 'shared/consts/localeStorage';
import axios from 'axios';
import { User, userActions } from 'entities/user';

interface LoginByUsernameProps {
  password: string;
  username: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (userData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      userData,
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(
      LOCALE_STORAGE_USER_KEY,
      JSON.stringify(response.data),
    );
    dispatch(userActions.setUserData(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue(i18n.t('AuthError'));
  }
});
