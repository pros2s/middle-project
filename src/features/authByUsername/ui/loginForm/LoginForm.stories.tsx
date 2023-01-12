import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { loginReducer } from '../../model/slice/LoginSlice';
import LoginForm from './LoginForm';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator(
    {
      login: { username: 'username', password: 'password' },
    },
    { login: loginReducer },
  ),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator(
    {
      login: { errorMessage: 'error message' },
    },
    { login: loginReducer },
  ),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator(
    {
      login: { isLoading: true },
    },
    { login: loginReducer },
  ),
];

// Dark theme
export const DarkDefault = Template.bind({});
DarkDefault.args = {};
DarkDefault.decorators = [
  StoreDecorator(
    {
      login: { username: 'username', password: 'password' },
    },
    { login: loginReducer },
  ),
  ThemeDecorator(Themes.DARK),
];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [
  StoreDecorator(
    {
      login: { errorMessage: 'error message' },
    },
    { login: loginReducer },
  ),
  ThemeDecorator(Themes.DARK),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [
  StoreDecorator(
    {
      login: { isLoading: true },
    },
    { login: loginReducer },
  ),
  ThemeDecorator(Themes.DARK),
];
