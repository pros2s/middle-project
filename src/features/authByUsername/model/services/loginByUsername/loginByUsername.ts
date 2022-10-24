import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/user';
import axios from 'axios';

interface LoginByUsernameProps {
  password: string;
  username: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      userData,
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
