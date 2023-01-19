import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
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
    src: 'https://miro.medium.com/max/300/1*A_Hg7NPIoARg0RmdsVapqg.png',
  },
};

export const Dark = Template.bind({});
Dark.args = {
  block: {
    id: '1',
    type: ArticleBlockType.IMAGE,
    title: 'Title of picture',
    src: 'https://miro.medium.com/max/300/1*A_Hg7NPIoARg0RmdsVapqg.png',
  },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
