import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { addCommentReducer } from '../model/slice/AddCommentSlice';
import AddComment from './AddComment';
import { Themes } from '@/shared/consts/themes';

export default {
  title: 'Features/AddComment',
  component: AddComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => (
  <AddComment {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator(
    {
      addComment: { text: 'Comment text' },
    },
    { addComment: addCommentReducer },
  ),
];

export const DarkDefault = Template.bind({});
DarkDefault.args = {};
DarkDefault.decorators = [
  StoreDecorator(
    {
      addComment: { text: 'Comment text' },
    },
    { addComment: addCommentReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
