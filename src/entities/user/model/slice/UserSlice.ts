import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALE_STORAGE_USER_KEY } from '@/shared/consts/localeStorage';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  authData: undefined,
  _inited: false,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<User>) {
      state.authData = payload;
    },
    initUserData(state) {
      const data = localStorage.getItem(LOCALE_STORAGE_USER_KEY);
      if (data) {
        state.authData = JSON.parse(data);
      }
      state._inited = true;
    },
    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(LOCALE_STORAGE_USER_KEY);
    },
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
