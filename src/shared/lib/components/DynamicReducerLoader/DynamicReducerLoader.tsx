import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManger } from 'app/providers/StoreProvider';
import { StateSchemaFields } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaFields]?: Reducer;
};

type ReducerEntry = [StateSchemaFields, Reducer];

interface DynamicReducerLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount,
}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManger;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@Init ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@Destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
