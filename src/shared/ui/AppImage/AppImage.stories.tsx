/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/shared/consts/themes';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';
import { Text, TextThemes, TextSize } from '../Text';

export default {
  title: 'Shared/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
);

// Default
export const Default = Template.bind({});
Default.args = {
  fallback: <Skeleton height={300} width={300} />,
};

export const Error = Template.bind({});
Error.args = {
  errorFallback: (
    <Text text='Error' size={TextSize.M} theme={TextThemes.ERROR} />
  ),
};

export const CircleDark = Template.bind({});
CircleDark.decorators = [ThemeDecorator(Themes.DARK)];
CircleDark.args = {
  fallback: <Skeleton height={300} width={300} borderRadius='50%' />,
};
