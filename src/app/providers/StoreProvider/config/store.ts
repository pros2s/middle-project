import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user';
import { AvatarLoginBtnReducer } from '@/features/avatarLogInBtn';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { scrollPositionReducer } from '@/widgets/Page';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';
import { signInReducer } from '@/features/signInByUsername';

export function createReduxStore(
  preloadedState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: Reducer<StateSchema> | ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    signin: signInReducer,
    user: userReducer,
    scroll: scrollPositionReducer,
    avatarLogInBtn: AvatarLoginBtnReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    preloadedState,
    devTools: __IS_DEV__,
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
