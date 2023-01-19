import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { RaitingCard } from './RaitingCard';

export default {
  title: 'Entities/RaitingCard',
  component: RaitingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RaitingCard>;

const Template: ComponentStory<typeof RaitingCard> = (args) => (
  <RaitingCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  feedbackTitle: 'Feedback title',
  hasFeedback: true,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  title: 'Title',
  feedbackTitle: 'Feedback title',
  hasFeedback: true,
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
