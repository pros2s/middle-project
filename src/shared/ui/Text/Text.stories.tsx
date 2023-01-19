import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Text, TextAlign, TextSize, TextThemes } from './Text';

export default {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// PRIMARY
export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

// PRIMARY LEFT
export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
  align: TextAlign.LEFT,
};

export const PrimaryLeftDark = Template.bind({});
PrimaryLeftDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
  align: TextAlign.LEFT,
};
PrimaryLeftDark.decorators = [ThemeDecorator(Themes.DARK)];

// PRIMARY LEFT
export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
  align: TextAlign.RIGHT,
};

export const PrimaryRightDark = Template.bind({});
PrimaryRightDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
  align: TextAlign.RIGHT,
};
PrimaryRightDark.decorators = [ThemeDecorator(Themes.DARK)];

// PRIMARY LEFT
export const PrimaryCenter = Template.bind({});
PrimaryCenter.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
  align: TextAlign.CENTER,
};

export const PrimaryCenterDark = Template.bind({});
PrimaryCenterDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
  align: TextAlign.CENTER,
};
PrimaryCenterDark.decorators = [ThemeDecorator(Themes.DARK)];

// Only title
export const Title = Template.bind({});
Title.args = {
  title: 'Title',
  theme: TextThemes.PRIMARY,
};

export const TitleDark = Template.bind({});
TitleDark.args = {
  title: 'Title',
  theme: TextThemes.PRIMARY,
};
TitleDark.decorators = [ThemeDecorator(Themes.DARK)];

// Only text
export const JustText = Template.bind({});
JustText.args = {
  text: 'Text',
  theme: TextThemes.PRIMARY,
};

export const JustTextDark = Template.bind({});
JustTextDark.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
  theme: TextThemes.PRIMARY,
};
JustTextDark.decorators = [ThemeDecorator(Themes.DARK)];

// Error
export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  text: 'Error message',
  theme: TextThemes.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Error',
  text: 'Error message',
  theme: TextThemes.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Themes.DARK)];

// Size_S
export const S = Template.bind({});
S.args = {
  text: 'Some message',
  title: 'Some title',
  size: TextSize.S,
};

export const SDark = Template.bind({});
SDark.args = {
  text: 'Some message',
  title: 'Some title',
  size: TextSize.S,
};
SDark.decorators = [ThemeDecorator(Themes.DARK)];

// Size_M
export const M = Template.bind({});
M.args = {
  text: 'Some message',
  title: 'Some title',
  size: TextSize.M,
};

export const MDark = Template.bind({});
MDark.args = {
  text: 'Some message',
  title: 'Some title',
  size: TextSize.M,
};
MDark.decorators = [ThemeDecorator(Themes.DARK)];

// Size_L
export const L = Template.bind({});
L.args = {
  text: 'Some message',
  title: 'Some title',
  size: TextSize.L,
};

export const LDark = Template.bind({});
LDark.args = {
  text: 'Some message',
  title: 'Some title',
  size: TextSize.L,
};
LDark.decorators = [ThemeDecorator(Themes.DARK)];
