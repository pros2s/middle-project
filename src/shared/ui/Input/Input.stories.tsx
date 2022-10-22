import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Input } from './Input';

export default {
  title: 'Shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  value: 'value',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  placeholder: 'placeholder',
  value: 'value',
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
