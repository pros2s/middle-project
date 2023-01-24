import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
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
Default.args = {
  articleId: '1',
};
Default.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
  ThemeDecorator(Themes.DARK),
];
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/article-raiting?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  articleId: '1',
};
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
  ThemeDecorator(Themes.DARK),
];
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-raiting?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
