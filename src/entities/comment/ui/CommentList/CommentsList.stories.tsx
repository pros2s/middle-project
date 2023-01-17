import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { UserRoles } from '@/entities/user';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'Entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  comments: [
    {
      id: '1',
      text: 'text 1',
      user: {
        id: '1',
        roles: [UserRoles.ADMIN],
        username: 'username',
        avatar:
          'https://cdn.dribbble.com/users/759083/screenshots/16022876/media/8e462db1bac370883bf90c94a77d598c.jpg?compress=1&resize=400x300',
      },
    },
    {
      id: '2',
      text: 'text 2',
      user: {
        id: '2',
        username: 'username 2',
        avatar:
          'https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png',
      },
    },
  ],
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  comments: [
    {
      id: '1',
      text: 'text 1',
      user: {
        id: '1',
        username: 'username',
        avatar:
          'https://cdn.dribbble.com/users/759083/screenshots/16022876/media/8e462db1bac370883bf90c94a77d598c.jpg?compress=1&resize=400x300',
      },
    },
    {
      id: '2',
      text: 'text 2',
      user: {
        id: '2',
        username: 'username 2',
        avatar:
          'https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png',
      },
    },
  ],
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];

// loading
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Themes.DARK)];
