import { TestAsyncThunk } from 'shared/lib/testHelpers/testAsyncThunk';
import { Profile } from 'entities/profile';
import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';
import { fetchProfileData } from './fetchProfileData';

const data: Profile = {
  username: 'Username',
  name: 'Name',
  age: 22,
  country: Country.ARMENIA,
  currency: Currency.EUR,
  city: 'City',
};

describe('fetchProfileData.test', () => {
  test('succes fetch function call', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });

  test('error 403 with fetch function call', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
