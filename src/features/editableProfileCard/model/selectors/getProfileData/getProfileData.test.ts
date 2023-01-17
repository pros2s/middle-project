import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/countrySelect';
import { Currency } from '@/entities/currencySelect';
import { Profile } from '@/entities/profile';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile state', () => {
    const profileData: Profile = {
      username: 'Username',
      name: 'Name',
      age: 22,
      country: Country.ARMENIA,
      currency: Currency.EUR,
      city: 'City',
    };
    const state: DeepPartial<StateSchema> = {
      profile: { profileData },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });
  test('should return undefined state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
