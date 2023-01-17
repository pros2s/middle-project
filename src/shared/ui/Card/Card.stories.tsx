import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Text } from '../Text/Text';

import { Card } from './Card';

export default {
  title: 'Shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// Default
export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title='Some title' text='Some text' />,
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
DefaultDark.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title='Some title' text='Some text' />,
};

// Active
export const Active = Template.bind({});
Active.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title='Some title' text='Some text' />,
  active: true,
};

export const ActiveDark = Template.bind({});
ActiveDark.decorators = [ThemeDecorator(Themes.DARK)];
ActiveDark.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title='Some title' text='Some text' />,
  active: true,
};
