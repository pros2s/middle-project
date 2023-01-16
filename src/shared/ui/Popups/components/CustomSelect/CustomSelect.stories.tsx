import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';

import { CustomSelect } from './CustomSelect';

export default {
  title: 'Shared/Popups/CustomSelect',
  component: CustomSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ paddingLeft: 200, paddingTop: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => (
  <CustomSelect {...args} />
);

// Default
export const Default = Template.bind({});
Default.args = {
  defaultValue: 'default',
  items: [
    { value: 'value', content: 'content' },
    { value: 'another value', content: 'another content' },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
};

// Dark
export const Dark = Template.bind({});
Dark.args = {
  defaultValue: 'default',
  items: [
    { value: 'value', content: 'content' },
    { value: 'another value', content: 'another content' },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

// Dark
export const Orange = Template.bind({});
Orange.args = {
  defaultValue: 'default',
  items: [
    { value: 'value', content: 'content' },
    { value: 'another value', content: 'another content' },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
};
Orange.decorators = [ThemeDecorator(Themes.ORANGE)];
