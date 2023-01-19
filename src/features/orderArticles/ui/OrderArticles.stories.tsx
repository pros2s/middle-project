import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { OrderArticles } from './OrderArticles';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'features/OrderArticles',
  component: OrderArticles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderArticles>;

const Template: ComponentStory<typeof OrderArticles> = () => <OrderArticles />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
