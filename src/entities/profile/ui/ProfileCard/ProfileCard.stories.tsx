import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import avatar from 'shared/lib/testHelpers/smartMonkey.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    username: 'Username',
    name: 'Name',
    age: 22,
    avatar,
    city: 'City',
  },
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  data: {
    username: 'Username',
    name: 'Name',
    age: 22,
    avatar,
    city: 'City',
  },
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];

// Loading
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Themes.DARK)];

// Error
export const Error = Template.bind({});
Error.args = {
  errorMessage: 'true',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  errorMessage: 'true',
};
ErrorDark.decorators = [ThemeDecorator(Themes.DARK)];
