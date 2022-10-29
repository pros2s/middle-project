import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username value', () => {
    const login = {
      errorMessage: 'error',
      isLoading: true,
      password: 'password',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = { login };

    expect(getLoginUsername(state as StateSchema)).toEqual(login.username);
  });
});
