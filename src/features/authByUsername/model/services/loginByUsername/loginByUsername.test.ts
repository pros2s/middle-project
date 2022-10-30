import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { userActions } from 'entitties/user';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  test('succes login function call', async () => {
    const userTestData = { id: '2', username: 'username' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userTestData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      password: 'password',
      username: 'username',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setUserData(userTestData),
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userTestData);
    expect(thunk.dispatch).toBeCalledTimes(3);
  });

  test('error 403 with login function call', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      password: 'password',
      username: 'username',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('AuthError');
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
