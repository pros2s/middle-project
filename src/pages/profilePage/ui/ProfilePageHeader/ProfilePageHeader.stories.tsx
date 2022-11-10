import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { ProfilePageHeader } from './ProfilePageHeader';

export default {
  title: 'Pages/ProfilePageHeader',
  component: ProfilePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = () => (
  <ProfilePageHeader />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({}, { profile: profileReducer })];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [
  StoreDecorator({}, { profile: profileReducer }),
  ThemeDecorator(Themes.DARK),
];
