import { CounterActions, CounterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice.test', () => {
  test('should increment value', () => {
    const state: CounterSchema = { value: 0 };

    expect(CounterReducer(state, CounterActions.increment)).toEqual({
      value: 1,
    });
  });

  test('should decrement value', () => {
    const state: CounterSchema = { value: 0 };

    expect(CounterReducer(state, CounterActions.decrement)).toEqual({
      value: -1,
    });
  });

  test('should increment undefined value', () => {
    expect(CounterReducer(undefined, CounterActions.increment)).toEqual({
      value: 1,
    });
  });
});
