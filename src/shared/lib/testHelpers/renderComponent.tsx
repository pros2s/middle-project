import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { ReducersList } from '../components/DynamicReducerLoader/DynamicReducerLoader';

interface RenderComponentOptions {
  route?: string;
  preloadedState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export const renderComponent = (
  component: ReactNode,
  { route = '/', preloadedState, asyncReducers }: RenderComponentOptions = {},
) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        preloadedState={preloadedState}
      >
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
