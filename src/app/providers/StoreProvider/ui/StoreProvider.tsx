import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  preloadedState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    preloadedState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};
