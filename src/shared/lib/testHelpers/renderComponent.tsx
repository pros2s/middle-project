import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { DeepPartial } from '@reduxjs/toolkit';

interface RenderComponentOptions {
  route?: string;
  preloadedState?: DeepPartial<StateSchema>;
}

export const renderComponent = (
  component: ReactNode,
  { route = '/', preloadedState }: RenderComponentOptions = {},
) =>
  render(
    <StoreProvider preloadedState={preloadedState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
