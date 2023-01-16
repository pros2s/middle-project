import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationBtn } from './NotificationBtn';

export default {
  title: 'features/NotificationBtn',
  component: NotificationBtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationBtn>;

const Template: ComponentStory<typeof NotificationBtn> = (args) => (
  <NotificationBtn {...args} />
);

export const Default = Template.bind({});
Default.args = {};
