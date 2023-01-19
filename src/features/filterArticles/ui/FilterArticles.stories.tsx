import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { FilterArticles } from './FilterArticles';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'features/FilterArticles',
  component: FilterArticles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FilterArticles>;

const Template: ComponentStory<typeof FilterArticles> = (args) => (
  <FilterArticles {...args} />
);

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
