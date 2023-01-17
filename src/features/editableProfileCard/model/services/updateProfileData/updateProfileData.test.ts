import { TestAsyncThunk } from '@/shared/lib/testHelpers/testAsyncThunk';
import { Profile } from '@/entities/profile';
import { Country } from '@/entities/countrySelect';
import { Currency } from '@/entities/currencySelect';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { updateProfileData } from './updateProfileData';

const data: Profile = {
  username: 'Username',
  name: 'Name',
  age: 22,
  country: Country.ARMENIA,
  currency: Currency.EUR,
  city: 'City',
};

describe('updateProfileData.test', () => {
  test('succes update profile function call', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { profileData: data, readonly: true },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });

  test('validate error with update profile function call', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { profileData: { ...data, name: '' }, readonly: true },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_DATA]);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });

  test('error 403 with update profile function call', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { profileData: data, readonly: true },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
