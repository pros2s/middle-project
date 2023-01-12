import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManger } from 'app/providers/StoreProvider';
import {
  StateSchema,
  StateSchemaFields,
} from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaFields]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicReducerLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManger;
  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaFields];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaFields, reducer);
        dispatch({ type: `@Init ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaFields);
          dispatch({ type: `@Destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
