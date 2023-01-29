import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { SignInByUsernameSchema } from '../types/signInByUsernameSchema';
import { Profile } from '@/entities/profile';
import { UserRoles } from '@/entities/user';

const initialState: SignInByUsernameSchema = {
  password: '',
  repeatPassword: '',
  isOpenSignInModal: false,
  profileData: {},
  roles: [],
};

export const signInByUsernameSlice = buildSlice({
  name: 'signInByUsername',
  initialState,
  reducers: {
    setNewPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    setNewProfileData: (state, { payload }: PayloadAction<Profile>) => {
      state.profileData = { ...state.profileData, ...payload };
    },
    setRepeatPassword: (state, { payload }: PayloadAction<string>) => {
      state.repeatPassword = payload;
    },
    isSignInModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenSignInModal = payload;
    },
    addNewRoles: (state, { payload }: PayloadAction<UserRoles>) => {
      state.roles = [...state.roles, payload];
    },
    removeNewRoles: (state, { payload }: PayloadAction<UserRoles>) => {
      state.roles = state.roles.filter((role) => role !== payload);
    },
    clearRoles: (state) => {
      state.roles = [];
    },
  },
});

export const {
  actions: signInActions,
  reducer: signInReducer,
  useActions: useSignInActions,
} = signInByUsernameSlice;
