import { addDecorator } from '@storybook/react';
import { I18nextDecorator } from '../../src/shared/config/storyBook/I18nextDecorator';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storyBook/SuspenseDecorator';
import { Themes } from '../../src/shared/consts/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      title: 'Translate',
    },
  },
};

addDecorator(I18nextDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Themes.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
