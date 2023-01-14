import { ComponentStory, ComponentMeta } from '@storybook/react';
import { t } from 'i18next';

import { Dropdown } from './Dropdown';

export default {
  title: 'Shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{ paddingLeft: 200, paddingTop: 200 }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

// Default
export const Default = Template.bind({});
Default.args = {
  trigger: 'Click',
  items: [
    { content: <li>{t('first')}</li> },
    { content: <li>{t('second')}</li> },
    { content: <li>{t('third')}</li> },
  ],
};
