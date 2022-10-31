import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { userActions } from 'entities/user';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  test('succes login function call', async () => {
    const userTestData = { id: '2', username: 'username' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userTestData }));
    const result = await thunk.callThunk({
      password: 'password',
      username: 'username',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setUserData(userTestData),
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userTestData);
    expect(thunk.dispatch).toBeCalledTimes(3);
  });

  test('error 403 with login function call', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      password: 'password',
      username: 'username',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('AuthError');
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
