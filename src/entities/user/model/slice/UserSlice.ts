import { PayloadAction } from '@reduxjs/toolkit';
import { LOCALE_STORAGE_USER_KEY } from '@/shared/consts/localeStorage';
import { User, UserSchema } from '../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
  authData: undefined,
  avatar: '',
  _inited: false,
};

const UserSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<User>) {
      state.authData = payload;
    },
    setUserAvatar(state, { payload }: PayloadAction<string>) {
      state.avatar = payload;
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

export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = UserSlice;
