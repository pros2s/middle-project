import { ComponentStory, ComponentMeta } from '@storybook/react';
import { t } from 'i18next';

import { Popdown } from './Popdown';

export default {
  title: 'Shared/Popups/Popdown',
  component: Popdown,
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
} as ComponentMeta<typeof Popdown>;

const Template: ComponentStory<typeof Popdown> = (args) => (
  <Popdown {...args} />
);

// Default
export const Default = Template.bind({});
Default.args = {
  trigger: 'Click',
  children: (
    <>
      <li>{t('first')}</li>
      <li>{t('second')}</li>
      <li>{t('third')}</li>
    </>
  ),
};
