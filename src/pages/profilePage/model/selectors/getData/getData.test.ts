import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';
import { Profile } from 'entities/profile';
import { getData } from './getData';

describe('getData', () => {
  test('should return data state', () => {
    const data: Profile = {
      username: 'Username',
      name: 'Name',
      age: 22,
      country: Country.ARMENIA,
      currency: Currency.EUR,
      city: 'City',
    };
    const state: DeepPartial<StateSchema> = {
      profile: { data },
    };

    expect(getData(state as StateSchema)).toEqual(data);
  });
  test('should return undefined state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getData(state as StateSchema)).toEqual(undefined);
  });
});
