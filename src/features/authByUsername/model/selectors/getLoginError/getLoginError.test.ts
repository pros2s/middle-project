import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error message', () => {
    const login = {
      errorMessage: 'error',
      isLoading: true,
      password: 'password',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = { login };

    expect(getLoginError(state as StateSchema)).toEqual(login.errorMessage);
  });
});
