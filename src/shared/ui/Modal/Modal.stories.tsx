import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

// Default
export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)];
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
};
