import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ArticleTabs } from './ArticleTabs';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'Features/ArticleTabs',
  component: ArticleTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTabs>;

const Template: ComponentStory<typeof ArticleTabs> = (args) => (
  <ArticleTabs {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
