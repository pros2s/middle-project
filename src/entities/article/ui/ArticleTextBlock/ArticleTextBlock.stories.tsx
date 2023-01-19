import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ArticleTextBlock } from './ArticleTextBlock';
import { ArticleBlockType } from '../../model/types/Article';

export default {
  title: 'Entities/article/ArticleTextBlock',
  component: ArticleTextBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTextBlock>;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => (
  <ArticleTextBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: {
    id: '1',
    type: ArticleBlockType.TEXT,
    title: 'Title',
    paragraphs: ['Paragraph 1', 'paragraph 2'],
  },
};

export const Dark = Template.bind({});
Dark.args = {
  block: {
    id: '1',
    type: ArticleBlockType.TEXT,
    title: 'Title',
    paragraphs: ['Paragraph 1', 'paragraph 2'],
  },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
