import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { userReducer } from '@/entities/user';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { Sidebar } from './Sidebar';

export default {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

// Logged in
export const LightLoggedIn = Template.bind({});
LightLoggedIn.decorators = [
  StoreDecorator({ user: { authData: {} } }, { user: userReducer }),
];

export const DarkLoggedIn = Template.bind({});
DarkLoggedIn.decorators = [
  StoreDecorator({ user: { authData: {} } }, { user: userReducer }),
  ThemeDecorator(Themes.DARK),
];

// Logged out
export const LightLoggedOut = Template.bind({});
LightLoggedOut.decorators = [StoreDecorator({}, { user: userReducer })];

export const DarkLoggedOut = Template.bind({});
DarkLoggedOut.decorators = [
  StoreDecorator({}, { user: userReducer }),
  ThemeDecorator(Themes.DARK),
];
