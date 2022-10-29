import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
  test('should return loading status', () => {
    const login = {
      errorMessage: 'error',
      isLoading: true,
      password: 'password',
      username: 'username',
    };
    const state: DeepPartial<StateSchema> = { login };

    expect(getLoginLoading(state as StateSchema)).toEqual(login.isLoading);
  });
});
