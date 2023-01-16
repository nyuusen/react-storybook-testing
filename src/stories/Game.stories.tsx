import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Game } from '..';

export default {
  title: 'Game',
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = () => <Game />;

export const Default = Template.bind({});
Default.args = {};