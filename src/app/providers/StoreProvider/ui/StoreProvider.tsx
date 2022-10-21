import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  preloadedState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState,
}) => {
  const store = createReduxStore(preloadedState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
