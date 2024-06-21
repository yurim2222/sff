import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectGroup from './SelectGroup'

const foods = [
  {
    category: 'meal',
    value: 'pizza',
    name: '🍕'
  },
  {
    category: 'meal',
    value: 'hamburger',
    name: '🍔'
  },
  {
    category: 'meal',
    value: 'hotdog',
    name: '🌭'
  },
  {
    category: 'meal',
    value: 'chicken',
    name: '🍗'
  },
  {
    category: 'fruit',
    value: 'apple',
    name: '🍎'
  },
  {
    category: 'fruit',
    value: 'orange',
    name: '🍊'
  },
  {
    category: 'fruit',
    value: 'grape',
    name: '🍇'
  },
  {
    category: 'fruit',
    value: 'banana',
    name: '🍌'
  },
];

const meta = {
  title: 'SELECT/SelectGroup',
  component: SelectGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}
export default meta;
type Story = StoryObj<typeof meta>;


export const Group: Story = {
  args: {
    options: foods,
    value: foods[0].value,
  },
};

