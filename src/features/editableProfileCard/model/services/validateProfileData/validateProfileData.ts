import { Profile } from '@/entities/profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const errors: ValidateProfileError[] = [];

  const { age, name, username, city } = profile;

  if (!age || !Number.isInteger(age) || age > 120 || age < 5) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!name || !username) {
    errors.push(ValidateProfileError.INCORRECT_DATA);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
};
