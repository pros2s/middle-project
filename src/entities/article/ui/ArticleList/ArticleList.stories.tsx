import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { initializeArticles } from '@/shared/lib/testHelpers/initializeArticles';
import { ArticleView } from '../../model/types/Article';
import { ArticleList } from './ArticleList';

export default {
  title: 'Entities/article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

// BIG
export const BIG = Template.bind({});
BIG.args = {
  view: ArticleView.BIG,
  articles: initializeArticles(ArticleView.BIG),
};

export const BIGDark = Template.bind({});
BIGDark.args = {
  view: ArticleView.BIG,
  articles: initializeArticles(ArticleView.BIG),
};
BIGDark.decorators = [ThemeDecorator(Themes.DARK)];

// Small
export const SMALL = Template.bind({});
SMALL.args = {
  view: ArticleView.SMALL,
  articles: initializeArticles(ArticleView.SMALL),
};

export const SMALLDark = Template.bind({});
SMALLDark.args = {
  view: ArticleView.SMALL,
  articles: initializeArticles(ArticleView.SMALL),
};
SMALLDark.decorators = [ThemeDecorator(Themes.DARK)];

// BIG loading
export const BIGLoading = Template.bind({});
BIGLoading.args = {
  view: ArticleView.BIG,
  isLoading: true,
  articles: initializeArticles(ArticleView.BIG),
};

export const BIGDarkLoading = Template.bind({});
BIGDarkLoading.args = {
  view: ArticleView.BIG,
  isLoading: true,
  articles: initializeArticles(ArticleView.BIG),
};
BIGDarkLoading.decorators = [ThemeDecorator(Themes.DARK)];

// Small loading
export const SMALLLoading = Template.bind({});
SMALLLoading.args = {
  view: ArticleView.SMALL,
  isLoading: true,
  articles: initializeArticles(ArticleView.SMALL),
};

export const SMALLDarkLoading = Template.bind({});
SMALLDarkLoading.args = {
  view: ArticleView.SMALL,
  isLoading: true,
  articles: initializeArticles(ArticleView.SMALL),
};
SMALLDarkLoading.decorators = [ThemeDecorator(Themes.DARK)];
