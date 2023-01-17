import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { Navbar } from './Navbar';

export default {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];

// Authenticated
export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [
  StoreDecorator({ user: { authData: { username: 'username' } } }),
];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [
  StoreDecorator({ user: { authData: { username: 'username' } } }),
  ThemeDecorator(Themes.DARK),
];
