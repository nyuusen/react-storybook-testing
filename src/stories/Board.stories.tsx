import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Board } from '..';

export default {
  title: 'Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const EmptyBoard = Template.bind({});
EmptyBoard.args = {
  squares: Array(9).fill(null)
};

export const AllFilledTriangle = Template.bind({});
AllFilledTriangle.args = {
  squares: Array(9).fill('△')
};