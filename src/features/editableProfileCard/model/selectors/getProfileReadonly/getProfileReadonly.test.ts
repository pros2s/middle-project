import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return profile readonly state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: true },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('should return undefined state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
