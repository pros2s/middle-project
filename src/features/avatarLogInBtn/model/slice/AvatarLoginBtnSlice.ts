import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvatarLoginBtnSchema } from '../types/AvatarLoginBtnSchema';

const initialState: AvatarLoginBtnSchema = {
  isLogInModal: false,
};

const avatarLoginBtnSlice = createSlice({
  name: 'avatarLoginBtn',
  initialState,
  reducers: {
    setIsLogInModal(state, { payload }: PayloadAction<boolean>) {
      state.isLogInModal = payload;
    },
  },
});

export const { actions: AvatarLoginBtnActions } = avatarLoginBtnSlice;
export const { reducer: AvatarLoginBtnReducer } = avatarLoginBtnSlice;
