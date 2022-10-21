import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  preloadedState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState,
}) => {
  const store = createReduxStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
};
