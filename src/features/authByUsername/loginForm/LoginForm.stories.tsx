import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';

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
