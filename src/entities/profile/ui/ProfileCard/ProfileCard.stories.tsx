import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => <ProfileCard />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({}, { profile: profileReducer })];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [
  StoreDecorator({}, { profile: profileReducer }),
  ThemeDecorator(Themes.DARK),
];

// Fullfield
export const Fullfield = Template.bind({});
Fullfield.args = {};
Fullfield.decorators = [
  StoreDecorator(
    { profile: { data: { name: 'Name', username: 'Username' } } },
    { profile: profileReducer },
  ),
];

export const FullfieldDark = Template.bind({});
FullfieldDark.args = {};
FullfieldDark.decorators = [
  StoreDecorator(
    { profile: { data: { name: 'Name', username: 'Username' } } },
    { profile: profileReducer },
  ),
  ThemeDecorator(Themes.DARK),
];

// With error
export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator(
    { profile: { errorMessage: 'Error with profile' } },
    { profile: profileReducer },
  ),
];

export const ErrorDark = Template.bind({});
ErrorDark.args = {};
ErrorDark.decorators = [
  StoreDecorator(
    { profile: { errorMessage: 'Error with profile' } },
    { profile: profileReducer },
  ),
  ThemeDecorator(Themes.DARK),
];

// With loading
export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({ profile: { isLoading: true } }, { profile: profileReducer }),
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [
  StoreDecorator({ profile: { isLoading: true } }, { profile: profileReducer }),
  ThemeDecorator(Themes.DARK),
];
