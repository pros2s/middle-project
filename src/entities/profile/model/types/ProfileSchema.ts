import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';

export enum ValidateProfileError {
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_DATA = 'INCORRECT_DATA',
  INCORRECT_CITY = 'INCORRECT_CITY',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export interface Profile {
  id?: string;
  name?: string;
  username?: string;
  city?: string;
  currency?: Currency;
  country?: Country;
  age?: number;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  profileData?: Profile;
  isLoading?: boolean;
  errorMessage?: string;
  readonly: boolean;
  validation?: ValidateProfileError[];
}
