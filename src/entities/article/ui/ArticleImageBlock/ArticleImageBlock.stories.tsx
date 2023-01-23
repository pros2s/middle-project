import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ArticleImageBlock } from './ArticleImageBlock';
import { ArticleBlockType } from '../../model/types/Article';

export default {
  title: 'Entities/article/ArticleImageBlock',
  component: ArticleImageBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => (
  <ArticleImageBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: {
    id: '1',
    type: ArticleBlockType.IMAGE,
    title: 'Title of picture',
    src: 'https://i.ytimg.com/vi/sQmgeYoO2rE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyRFI4iK7B5YhYlhBEWLhKUrQNZQ',
  },
};

export const Dark = Template.bind({});
Dark.args = {
  block: {
    id: '1',
    type: ArticleBlockType.IMAGE,
    title: 'Title of picture',
    src: 'https://i.ytimg.com/vi/sQmgeYoO2rE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyRFI4iK7B5YhYlhBEWLhKUrQNZQ',
  },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
