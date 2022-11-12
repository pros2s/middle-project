import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { LoginSchema } from 'features/authByUsername';
import { ArticleDetailsSchema } from 'entities/article';
import { UserSchema } from 'entities/user';
import { ProfileSchema } from 'entities/profile';

import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
  user: UserSchema;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaFields = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaFields, reducer: Reducer) => void;
  remove: (key: StateSchemaFields) => void;
}

export interface ReduxStoreWithManger extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkAPI {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkAPI;
  state: StateSchema;
}
