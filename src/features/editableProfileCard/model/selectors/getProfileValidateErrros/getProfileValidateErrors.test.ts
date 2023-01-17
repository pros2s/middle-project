import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileValidateErrros } from './getProfileValidateErrros';

describe('getProfileValidateErrros', () => {
  test('should return validate errors state', () => {
    const validation: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validation,
      },
    };

    expect(getProfileValidateErrros(state as StateSchema)).toEqual(validation);
  });
  test('should return undefined state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrros(state as StateSchema)).toEqual(undefined);
  });
});
