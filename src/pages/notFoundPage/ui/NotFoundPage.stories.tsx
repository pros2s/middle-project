import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import NotFoundPage from './NotFoundPage';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
