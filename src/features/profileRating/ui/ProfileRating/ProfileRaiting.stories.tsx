import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';

export default {
  title: 'Features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  <ProfileRating {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profileId: '1',
};
Default.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
  ThemeDecorator(Themes.DARK),
];
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-raiting?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  profileId: '1',
};
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
  ThemeDecorator(Themes.DARK),
];
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-raiting?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
