import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Select } from './Select';

export default {
  title: 'Shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label:',
  options: [
    { value: 'first value', content: 'first content' },
    { value: 'second value', content: 'second content' },
  ],
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  label: 'Label:',
  options: [
    { value: 'first value', content: 'first content' },
    { value: 'second value', content: 'second content' },
  ],
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Label:',
  readOnly: true,
  options: [{ value: 'first value', content: 'first content' }],
};

export const ReadOnlyDark = Template.bind({});
ReadOnlyDark.args = {
  label: 'Label:',
  readOnly: true,
  options: [{ value: 'first value', content: 'first content' }],
};
ReadOnlyDark.decorators = [ThemeDecorator(Themes.DARK)];
