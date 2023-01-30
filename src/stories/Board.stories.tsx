import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Board } from '../components/Board';

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

export const DrawBoard= Template.bind({});
DrawBoard.args = {
  squares: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X']
};