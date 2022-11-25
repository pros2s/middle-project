import { StateSchema } from 'app/providers/StoreProvider';
import {
  getIsLoadingFromComments,
  getErrorMessageFromComments,
} from './getFromComments';

describe('getFromComments', () => {
  test('should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      articleComments: {
        isLoading: false,
      },
    };

    expect(getIsLoadingFromComments(state as StateSchema)).toEqual(false);
  });
  test('should return undefined error state', () => {
    const state: DeepPartial<StateSchema> = {
      articleComments: {
        errorMessage: 'error',
      },
    };
    expect(getErrorMessageFromComments(state as StateSchema)).toEqual('error');
  });
});
