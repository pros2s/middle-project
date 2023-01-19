import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import ArticleRaiting from './ArticleRaiting';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'Features/ArticleRaiting',
  component: ArticleRaiting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRaiting>;

const Template: ComponentStory<typeof ArticleRaiting> = (args) => (
  <ArticleRaiting {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
