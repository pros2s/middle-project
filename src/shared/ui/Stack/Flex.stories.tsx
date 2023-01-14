import { ComponentStory, ComponentMeta } from '@storybook/react';
import { t } from 'i18next';
import { Flex } from './Flex';

export default {
  title: 'Shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div>{t('first')}</div>
      <div>{t('first')}</div>
      <div>{t('first')}</div>
      <div>{t('first')}</div>
    </>
  ),
};
