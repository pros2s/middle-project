import { AvatarLoginBtnSchema } from '../types/AvatarLoginBtnSchema';
import {
  AvatarLoginBtnActions,
  AvatarLoginBtnReducer,
} from './AvatarLoginBtnSlice';

describe('LoginSlice.test', () => {
  test('set ', () => {
    const state: DeepPartial<AvatarLoginBtnSchema> = {
      isLogInModal: false,
    };

    expect(
      AvatarLoginBtnReducer(
        state as AvatarLoginBtnSchema,
        AvatarLoginBtnActions.setIsLogInModal(true),
      ),
    ).toEqual({
      isLogInModal: true,
    });
  });
});
