import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import avatar from '@/shared/lib/testHelpers/smartMonkey.jpg';
import ProfilePage from './ProfilePage';
import { profileReducer } from '@/features/editableProfileCard';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Default = Template.bind({});
Default.decorators = [
  StoreDecorator(
    {
      profile: {
        readonly: true,
        profileData: {
          username: 'Username',
          name: 'Name',
          age: 22,
          avatar,
          city: 'City',
        },
      },
    },
    { profile: profileReducer },
  ),
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
  StoreDecorator(
    {
      profile: {
        readonly: true,
        profileData: {
          username: 'Username',
          name: 'Name',
          age: 22,
          avatar,
          city: 'City',
        },
      },
    },
    { profile: profileReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
