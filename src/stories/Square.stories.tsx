import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Square } from '..';

export default {
  title: 'Square',
  component: Square,
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const Cross = Template.bind({});
Cross.args = {
  value: 'X'
};

export const Circle = Template.bind({});
Circle.args = {
  value: 'O'
};
