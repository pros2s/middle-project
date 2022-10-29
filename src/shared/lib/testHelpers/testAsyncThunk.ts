import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatoreType<Returned, ThunkArg, RejectedValue> = (
  arg: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: ActionCreatoreType<Returned, ThunkArg, RejectedValue>;

  constructor(
    actionCreator: ActionCreatoreType<Returned, ThunkArg, RejectedValue>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: ThunkArg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
