import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { NotificationList } from './NotificationList';

export default {
  title: 'Entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = () => (
  <NotificationList />
);

export const Default = Template.bind({});
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: {
        data: [
          {
            description: 'Some description',
            id: '1',
            title: 'Title',
            userId: '1',
          },
          {
            description: 'Some description 2',
            id: '2',
            title: 'Title 2',
            userId: '1',
          },
        ],
      },
    },
  ],
};
Default.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
