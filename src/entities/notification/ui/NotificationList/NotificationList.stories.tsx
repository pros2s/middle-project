import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { NotificationList } from './NotificationList';

export default {
  title: 'Entities/notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = () => (
  <NotificationList />
);

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Что-то очень интересное',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Что-то очень интересное',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Что-то очень интересное',
        },
      ],
    },
  ],
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
DefaultDark.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Что-то очень интересное',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Что-то очень интересное',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Что-то очень интересное',
        },
      ],
    },
  ],
};

export const DefaultOrange = Template.bind({});
DefaultOrange.decorators = [StoreDecorator({}), ThemeDecorator(Themes.ORANGE)];
DefaultOrange.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Что-то очень интересное',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Что-то очень интересное',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Что-то очень интересное',
        },
      ],
    },
  ],
};
