import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice.test', () => {
  test('should increment value', () => {
    const state: CounterSchema = { value: 0 };

    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 1,
    });
  });

  test('should decrement value', () => {
    const state: CounterSchema = { value: 0 };

    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: -1,
    });
  });

  test('should increment undefined value', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
