import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { LoginSchema } from '@/features/authByUsername';
import { ArticleDetailsSchema } from '@/entities/article';
import { UserSchema } from '@/entities/user';

import { AxiosInstance } from 'axios';
import { ArticleDetailsPageSchema } from '@/pages/articleDetailsPage';
import { AddCommentSchema } from '@/features/addComment';
import { ArticleSchema } from '@/pages/articlesPage';
import { SrollSaveSchema } from '@/widgets/Page';
import { SidebarSchema } from '@/widgets/Sidebar';
import { ProfileSchema } from '@/features/editableProfileCard';
import { rtkApi } from '@/shared/api/rtkApi';
import { AvatarLoginBtnSchema } from '@/features/avatarLogInBtn';

export interface StateSchema {
  user: UserSchema;
  scroll: SrollSaveSchema;
  sidebar: SidebarSchema;
  avatarLogInBtn: AvatarLoginBtnSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleComments?: ArticleDetailsPageSchema;
  addComment?: AddCommentSchema;
  article?: ArticleSchema;
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
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkAPI;
  state: StateSchema;
}
