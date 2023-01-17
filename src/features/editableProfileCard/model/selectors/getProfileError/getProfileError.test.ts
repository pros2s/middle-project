import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return error message state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { errorMessage: 'message' },
    };

    expect(getProfileError(state as StateSchema)).toEqual('message');
  });
  test('should return undefined state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
