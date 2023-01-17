import { Profile } from '@/entities/profile';

export enum ValidateProfileError {
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_DATA = 'INCORRECT_DATA',
  INCORRECT_CITY = 'INCORRECT_CITY',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}
export interface ProfileSchema {
  data?: Profile;
  profileData?: Profile;
  isLoading?: boolean;
  errorMessage?: string;
  readonly: boolean;
  validation?: ValidateProfileError[];
}
