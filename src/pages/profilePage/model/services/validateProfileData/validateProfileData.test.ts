import { Profile } from 'entities/profile';
import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';
import { ValidateProfileError } from 'entities/profile/model/types/ProfileSchema';
import { validateProfileData } from './validateProfileData';

const data: Profile = {
  username: 'Username',
  name: 'Name',
  age: 22,
  country: Country.ARMENIA,
  currency: Currency.EUR,
  city: 'City',
};

describe('validateProfileData.test', () => {
  test('return empty error array', () => {
    const validate = validateProfileData(data);

    expect(validate).toEqual([]);
  });

  test('age error', () => {
    const validate = validateProfileData({ ...data, age: undefined });

    expect(validate).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('data error', () => {
    const validate = validateProfileData({ ...data, name: '', username: '' });

    expect(validate).toEqual([ValidateProfileError.INCORRECT_DATA]);
  });

  test('city error', () => {
    const validate = validateProfileData({ ...data, city: '' });

    expect(validate).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('no data error', () => {
    const validate = validateProfileData();

    expect(validate).toEqual([ValidateProfileError.NO_DATA]);
  });
});
