import { Country } from '@/entities/countrySelect';
import { Currency } from '@/entities/currencySelect';
import { Profile } from '@/entities/profile';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './ProfileSlice';
import {
  ProfileSchema,
  ValidateProfileError,
} from '../types/editableProfileCardSchema';

const data: Profile = {
  username: 'Username',
  name: 'Name',
  age: 22,
  country: Country.ARMENIA,
  currency: Currency.EUR,
  city: 'City',
};

describe('ProfileSlice.test', () => {
  test('setReadOnly', () => {
    const state: ProfileSchema = { readonly: false };

    expect(profileReducer(state, profileActions.setReadOnly(true))).toEqual({
      readonly: true,
    });
  });

  test('cancelChangeProfileData', () => {
    const state: ProfileSchema = {
      data,
      readonly: true,
      profileData: { ...data, age: 50 },
      validation: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(
      profileReducer(state, profileActions.cancelChangeProfileData()),
    ).toEqual({
      data,
      readonly: true,
      profileData: data,
      validation: undefined,
    });
  });

  test('changeProfileData', () => {
    const profileData: Profile = {
      username: 'Username',
      name: 'Name',
      age: 26,
      country: Country.BELARUS,
      currency: Currency.EUR,
      city: 'City',
    };
    const state: ProfileSchema = {
      profileData,
      readonly: true,
    };

    expect(
      profileReducer(
        state,
        profileActions.changeProfileData({ city: 'New city' }),
      ),
    ).toEqual({
      profileData: { ...profileData, city: 'New city' },
      readonly: true,
    });
  });

  test('fetchProfileData.pending', () => {
    const state: ProfileSchema = {
      readonly: true,
      isLoading: false,
      errorMessage: 'some message',
    };

    expect(profileReducer(state, fetchProfileData.pending)).toEqual({
      errorMessage: undefined,
      isLoading: true,
      readonly: true,
    });
  });

  test('fetchProfileData.fulfilled', () => {
    const state: ProfileSchema = {
      readonly: true,
      isLoading: true,
      errorMessage: 'some message',
    };

    expect(
      profileReducer(state, fetchProfileData.fulfilled(data, '', '1')),
    ).toEqual({
      data,
      readonly: true,
      profileData: data,
      errorMessage: undefined,
      isLoading: false,
    });
  });

  test('updateProfileData.pending', () => {
    const state: ProfileSchema = {
      readonly: false,
      validation: [
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_DATA,
      ],
      isLoading: false,
    };

    expect(profileReducer(state, updateProfileData.pending)).toEqual({
      validation: undefined,
      isLoading: true,
      readonly: false,
    });
  });

  test('updateProfileData.fulfilled', () => {
    const profileData: Profile = {
      ...data,
      age: 53,
      city: 'City',
    };

    const state: ProfileSchema = {
      readonly: false,
      isLoading: true,
      validation: [
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_DATA,
      ],
    };

    expect(
      profileReducer(state, updateProfileData.fulfilled(profileData, '')),
    ).toEqual({
      data: profileData,
      profileData,
      validation: undefined,
      readonly: true,
      isLoading: false,
    });
  });
});
