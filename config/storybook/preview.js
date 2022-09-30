import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator';
import { Themes } from '../../src/app/providers/ThemesProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Themes.LIGHT));
addDecorator(RouterDecorator);
