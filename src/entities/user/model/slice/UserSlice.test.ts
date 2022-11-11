import { userActions, userReducer } from './UserSlice';
import { UserSchema } from '../types/UserSchema';

describe('UserSlice.test', () => {
  test('set user data', () => {
    const state: UserSchema = {
      authData: { id: '1', username: 'user' },
      _inited: true,
    };

    expect(
      userReducer(
        state,
        userActions.setUserData({ id: '2', username: 'username' }),
      ),
    ).toEqual({ authData: { id: '2', username: 'username' }, _inited: true });
  });

  test('logout', () => {
    const state: UserSchema = {
      authData: { id: '1', username: 'user' },
      _inited: true,
    };

    expect(userReducer(state, userActions.logout())).toEqual({
      authData: undefined,
      _inited: true,
    });
  });
});
