import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'Widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)];
Dark.args = {};
