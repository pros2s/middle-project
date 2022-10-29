import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('should return user state', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '2', username: 'username' } },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({
      authData: { id: '2', username: 'username' },
    });
  });
});
