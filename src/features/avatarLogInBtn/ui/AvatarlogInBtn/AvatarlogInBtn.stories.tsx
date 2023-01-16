import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarLogInBtn } from './AvatarlogInBtn';

export default {
  title: 'features/AvatarLogInBtn',
  component: AvatarLogInBtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarLogInBtn>;

const Template: ComponentStory<typeof AvatarLogInBtn> = (args) => (
  <AvatarLogInBtn {...args} />
);

export const Default = Template.bind({});
Default.args = {};
