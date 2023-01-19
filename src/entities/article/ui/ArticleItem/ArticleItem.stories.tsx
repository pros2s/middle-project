import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { initializeArticles } from '@/shared/lib/testHelpers/initializeArticles';
import { ArticleView } from '../../model/types/Article';
import { ArticleItem } from './ArticleItem';

export default {
  title: 'Entities/article/ArticleItem',
  component: ArticleItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => (
  <ArticleItem {...args} />
);

// BIG
export const BIG = Template.bind({});
BIG.args = {
  view: ArticleView.BIG,
  article: initializeArticles(ArticleView.BIG)[0],
};

export const BIGDark = Template.bind({});
BIGDark.args = {
  view: ArticleView.BIG,
  article: initializeArticles(ArticleView.BIG)[0],
};
BIGDark.decorators = [ThemeDecorator(Themes.DARK)];

// SMALL
export const SMALL = Template.bind({});
SMALL.args = {
  view: ArticleView.SMALL,
  article: initializeArticles(ArticleView.SMALL)[0],
};

export const SMALLDark = Template.bind({});
SMALLDark.args = {
  view: ArticleView.SMALL,
  article: initializeArticles(ArticleView.SMALL)[0],
};
SMALLDark.decorators = [ThemeDecorator(Themes.DARK)];
