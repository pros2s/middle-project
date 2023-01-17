import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from '@/app/providers/ThemesProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';

import { Code } from './Code';

export default {
  title: 'Shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

// Default
export const Default = Template.bind({});
Default.args = {
  text: "export default { \ntitle: 'Shared/Code', \ncomponent: Code, \nargTypes: {\n backgroundColor: { control: 'color' },\n},  \n} as ComponentMeta<typeof Code>;\nconst Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n",
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  text: "export default { \ntitle: 'Shared/Code', \ncomponent: Code, \nargTypes: {\n backgroundColor: { control: 'color' },\n},  \n} as ComponentMeta<typeof Code>;\nconst Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n",
};
DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];

export const DefaultOrange = Template.bind({});
DefaultOrange.args = {
  text: "export default { \ntitle: 'Shared/Code', \ncomponent: Code, \nargTypes: {\n backgroundColor: { control: 'color' },\n},  \n} as ComponentMeta<typeof Code>;\nconst Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n",
};
DefaultOrange.decorators = [ThemeDecorator(Themes.ORANGE)];
