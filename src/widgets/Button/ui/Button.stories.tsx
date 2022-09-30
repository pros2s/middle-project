import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { Button, ButtonThemes } from './Button';

export default {
  title: 'Widgets/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.decorators = [ThemeDecorator(Themes.LIGHT)];
Default.args = {
  children: 'text',
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
DefaultDark.args = {
  children: 'text',
};

export const Clear = Template.bind({});
Clear.decorators = [ThemeDecorator(Themes.LIGHT)];
Clear.args = {
  children: 'text',
  theme: ButtonThemes.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Themes.DARK)];
ClearDark.args = {
  children: 'text',
  theme: ButtonThemes.CLEAR,
};

export const Outline = Template.bind({});
Outline.decorators = [ThemeDecorator(Themes.LIGHT)];
Outline.args = {
  children: 'text',
  theme: ButtonThemes.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Themes.DARK)];
OutlineDark.args = {
  children: 'text',
  theme: ButtonThemes.OUTLINE,
};
