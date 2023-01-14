import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import ForbiddenPage from './ForbiddenPage';

export default {
  title: 'Pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({}, {})];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [StoreDecorator({}, {}), ThemeDecorator(Themes.DARK)];
