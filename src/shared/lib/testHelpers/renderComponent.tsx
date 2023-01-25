import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { ReducersList } from '../components/DynamicReducerLoader/DynamicReducerLoader';
import { Themes } from '@/shared/consts/themes';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { ThemesProvider } from '@/app/providers/ThemesProvider';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import '@/app/styles/index.scss';

export interface RenderComponentOptions {
  route?: string;
  preloadedState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
  theme?: Themes;
}

interface TestComponentRenderProps {
  children: ReactNode;
  options?: RenderComponentOptions;
}

export const TestComponentRender = (props: TestComponentRenderProps) => {
  const { children, options = {} } = props;
  const {
    asyncReducers,
    preloadedState,
    route = '/',
    theme = Themes.DARK,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        preloadedState={preloadedState}
      >
        <I18nextProvider i18n={i18nForTests}>
          <ThemesProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemesProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const renderComponent = (
  component: ReactNode,
  options: RenderComponentOptions = {},
) =>
  render(
    <TestComponentRender options={options}>{component}</TestComponentRender>,
  );
