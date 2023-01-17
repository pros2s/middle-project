import { StateSchema } from '@/app/providers/StoreProvider';
import { getAvatarLoginBtn } from './getAvatarLoginBtn';

describe('getAvatarLoginBtn', () => {
  test('should return avatarLogInBtn state', () => {
    const state: DeepPartial<StateSchema> = {
      avatarLogInBtn: { isLogInModal: true },
    };

    expect(getAvatarLoginBtn(state as StateSchema)).toEqual(true);
  });
});
