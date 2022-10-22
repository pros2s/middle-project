import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { Button, ButtonSizes, ButtonThemes } from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Default
export const Default = Template.bind({});
Default.args = {
  children: 'text',
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
DefaultDark.args = {
  children: 'text',
};

// Clear
export const Clear = Template.bind({});
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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'text',
  theme: ButtonThemes.INVERTED_CLEAR,
};

// With border
export const Outline = Template.bind({});
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

// Background themes
export const BackgroundDefault = Template.bind({});
BackgroundDefault.args = {
  children: 'text',
  theme: ButtonThemes.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'text',
  theme: ButtonThemes.INVERTED_BACKGROUND,
};

// Square
export const SquareS = Template.bind({});
SquareS.args = {
  children: '>',
  theme: ButtonThemes.INVERTED_BACKGROUND,
  square: true,
  size: ButtonSizes.S,
};
export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ButtonThemes.INVERTED_BACKGROUND,
  square: true,
  size: ButtonSizes.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonThemes.INVERTED_BACKGROUND,
  square: true,
  size: ButtonSizes.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonThemes.INVERTED_BACKGROUND,
  square: true,
  size: ButtonSizes.XL,
};

// Sizes
export const S = Template.bind({});
S.args = {
  children: 'text',
  theme: ButtonSizes.S,
};

export const M = Template.bind({});
M.args = {
  children: 'text',
  theme: ButtonSizes.M,
};

export const L = Template.bind({});
L.args = {
  children: 'text',
  theme: ButtonSizes.L,
};

export const XL = Template.bind({});
XL.args = {
  children: 'text',
  theme: ButtonSizes.XL,
};
