import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './LoginSlice';

describe('LoginSlice.test', () => {
  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('password')),
    ).toEqual({
      password: 'password',
    });
  });

  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('username')),
    ).toEqual({
      username: 'username',
    });
  });
});
