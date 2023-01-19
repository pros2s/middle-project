import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { SearchArticles } from './SearchArticles';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'features/SearchArticles',
  component: SearchArticles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchArticles>;

const Template: ComponentStory<typeof SearchArticles> = () => (
  <SearchArticles />
);

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
