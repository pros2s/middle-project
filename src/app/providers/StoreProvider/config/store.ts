import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(preloadedState?: StateSchema) {
  const store = configureStore<StateSchema>({
    preloadedState,
    devTools: __IS_DEV__,
    reducer: {
      counter: CounterReducer,
    },
  });

  return store;
}
