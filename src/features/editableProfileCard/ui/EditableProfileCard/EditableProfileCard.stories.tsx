import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import avatar from 'shared/lib/testHelpers/smartMonkey.jpg';
import { profileReducer } from '../../model/slice/ProfileSlice';

import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
  <EditableProfileCard {...args} />
);

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

export const Dark = Template.bind({});
Dark.decorators = [
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
