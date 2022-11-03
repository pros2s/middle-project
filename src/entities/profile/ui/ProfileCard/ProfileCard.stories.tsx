import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
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
Default.decorators = [StoreDecorator({})];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.DARK)];
