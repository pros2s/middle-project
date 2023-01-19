import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'Entities/notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  notification: {
    description: 'Some description',
    id: '1',
    title: 'Title',
    userId: '1',
  },
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  notification: {
    description: 'Some description',
    id: '1',
    title: 'Title',
    userId: '1',
  },
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
