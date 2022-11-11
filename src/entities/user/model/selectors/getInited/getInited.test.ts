import { StateSchema } from 'app/providers/StoreProvider';
import { getInited } from './getInited';

describe('getInited', () => {
  test('should return user _inited', () => {
    const state: DeepPartial<StateSchema> = {
      user: { _inited: true },
    };

    expect(getInited(state as StateSchema)).toEqual(true);
  });
});
