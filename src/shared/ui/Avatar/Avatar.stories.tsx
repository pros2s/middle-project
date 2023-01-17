import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { Avatar } from './Avatar';
import monkey from './smartMonkey.jpg';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'Link',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: monkey,
  size: '150px',
};

export const Small = Template.bind({});
Small.args = {
  src: monkey,
  size: '70px',
};

export const Large = Template.bind({});
Large.args = {
  src: monkey,
  size: '250px',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];
PrimaryDark.args = {
  src: monkey,
  size: '150px',
};
