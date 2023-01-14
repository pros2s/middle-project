import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
  title: 'Features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = () => (
  <EditableProfileCardHeader />
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
