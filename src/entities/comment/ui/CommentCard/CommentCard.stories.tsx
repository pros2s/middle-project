import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { UserRoles } from '@/entities/user';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'Entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  comment: {
    id: '1',
    text: 'comment text',
    user: {
      id: '1',
      roles: [UserRoles.ADMIN],
      username: 'username',
      avatar:
        'https://cdn.dribbble.com/users/759083/screenshots/16022876/media/8e462db1bac370883bf90c94a77d598c.jpg?compress=1&resize=400x300',
    },
  },
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  comment: {
    id: '1',
    text: 'comment text',
    user: {
      id: '1',
      roles: [UserRoles.ADMIN],
      username: 'username',
      avatar:
        'https://cdn.dribbble.com/users/759083/screenshots/16022876/media/8e462db1bac370883bf90c94a77d598c.jpg?compress=1&resize=400x300',
    },
  },
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];

// loading
export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const LoadingDark = Template.bind({});
LoadingDark.args = { isLoading: true };
LoadingDark.decorators = [ThemeDecorator(Themes.DARK)];
