import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { StateSchema } from './StateSchema';

export function createReduxStore(preloadedState?: StateSchema) {
  const rootReducer: Reducer<StateSchema> | ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const store = configureStore<StateSchema>({
    preloadedState,
    devTools: __IS_DEV__,
    reducer: rootReducer,
  });

  return store;
}
