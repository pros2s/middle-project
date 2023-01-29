import { Profile } from '@/entities/profile';
import i18n from '@/shared/config/i18n/i18n';

export enum ValidateProfileError {
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_DATA = 'INCORRECT_DATA',
  INCORRECT_CITY = 'INCORRECT_CITY',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export const profileValidateTranslates = {
  [ValidateProfileError.INCORRECT_AGE]: i18n.t('INCORRECT_AGE'),
  [ValidateProfileError.INCORRECT_CITY]: i18n.t('INCORRECT_CITY'),
  [ValidateProfileError.INCORRECT_DATA]: i18n.t('INCORRECT_DATA'),
  [ValidateProfileError.NO_DATA]: i18n.t('NO_DATA'),
  [ValidateProfileError.SERVER_ERROR]: i18n.t('SERVER_ERROR'),
};

export interface ProfileSchema {
  data?: Profile;
  profileData?: Profile;
  isLoading?: boolean;
  errorMessage?: string;
  readonly: boolean;
  validation?: ValidateProfileError[];
}
