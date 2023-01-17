import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'Shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'Link',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];
PrimaryDark.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.decorators = [ThemeDecorator(Themes.DARK)];
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
};
