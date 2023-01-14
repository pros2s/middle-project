import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';

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
