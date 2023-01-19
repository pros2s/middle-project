import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { SortArticles } from './SortArticles';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'features/SortArticles',
  component: SortArticles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SortArticles>;

const Template: ComponentStory<typeof SortArticles> = () => <SortArticles />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
