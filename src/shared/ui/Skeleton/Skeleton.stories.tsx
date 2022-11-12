import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'Shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = { height: 200, width: '100%' };

export const DefaultDark = Template.bind({});
DefaultDark.args = { height: 200, width: '100%' };
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];

export const DefaultOrange = Template.bind({});
DefaultOrange.args = {
  height: 200,
  width: '100%',
};
DefaultOrange.decorators = [ThemeDecorator(Themes.ORANGE)];

export const Circle = Template.bind({});
Circle.args = {
  height: 200,
  width: 200,
  borderRadius: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  height: 200,
  width: 200,
  borderRadius: '50%',
};
CircleDark.decorators = [ThemeDecorator(Themes.DARK)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
  height: 200,
  width: 200,
  borderRadius: '50%',
};
CircleOrange.decorators = [ThemeDecorator(Themes.ORANGE)];
