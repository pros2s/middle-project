import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
  test('should return login state', () => {
    const login = {
      errorMessage: 'error',
      isLoading: true,
      password: 'password',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = { login };

    expect(getLogin(state as StateSchema)).toEqual(login);
  });
});
