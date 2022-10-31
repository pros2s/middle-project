import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password value', () => {
    const login = {
      errorMessage: 'error',
      isLoading: true,
      password: 'password',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = { login };

    expect(getLoginPassword(state as StateSchema)).toEqual(login.password);
  });
});
