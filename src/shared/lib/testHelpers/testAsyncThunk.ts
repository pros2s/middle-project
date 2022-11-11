import { AsyncThunkAction, DeepPartial, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatoreType<Returned, ThunkArg, RejectedValue> = (
  arg: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: ActionCreatoreType<Returned, ThunkArg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreatoreType<Returned, ThunkArg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: ThunkArg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
