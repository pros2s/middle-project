import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { StarRaiting } from './StarRaiting';

export default {
  title: 'Shared/StarRaiting',
  component: StarRaiting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRaiting>;

const Template: ComponentStory<typeof StarRaiting> = (args) => (
  <StarRaiting {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 40,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  size: 40,
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
