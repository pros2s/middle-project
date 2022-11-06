import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';

export interface Profile {
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
}
