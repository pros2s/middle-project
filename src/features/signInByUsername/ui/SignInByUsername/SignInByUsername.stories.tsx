import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

import SignInByUsername from './SignInByUsername';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Themes } from '@/shared/consts/themes';

export default {
  title: 'features/SignInByUsername',
  component: SignInByUsername,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SignInByUsername>;

const Template: ComponentStory<typeof SignInByUsername> = (args) => (
  <SignInByUsername {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
