import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { ArticleCodeBlock } from './ArticleCodeBlock';
import { ArticleBlockType } from '../../model/types/Article';

export default {
  title: 'Entities/article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
  <ArticleCodeBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: {
    id: '1',
    type: ArticleBlockType.CODE,
    code: `argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
  <ArticleCodeBlock {...args} />
);`,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  block: {
    id: '1',
    type: ArticleBlockType.CODE,
    code: `argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => (
  <ArticleCodeBlock {...args} />
);`,
  },
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
