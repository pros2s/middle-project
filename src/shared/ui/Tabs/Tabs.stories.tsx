import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Themes } from '@/shared/consts/themes';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { ArticleType } from '@/entities/article';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Tabs } from './Tabs';

export default {
  title: 'Shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { value: ArticleType.ALL, content: 'All' },
    { value: ArticleType.ECONOMICS, content: 'Economics' },
    { value: ArticleType.IT, content: 'IT' },
    { value: ArticleType.SCIENCE, content: 'Science' },
  ],

  activeType: ArticleType.ECONOMICS,
  onChangeTab: action('changeTabHandler'),
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  tabs: [
    { value: ArticleType.ALL, content: 'All' },
    { value: ArticleType.ECONOMICS, content: 'Economics' },
    { value: ArticleType.IT, content: 'IT' },
    { value: ArticleType.SCIENCE, content: 'Science' },
  ],

  activeType: ArticleType.ECONOMICS,
  onChangeTab: action('changeTabHandler'),
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
