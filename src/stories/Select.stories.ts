import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Select from './Select'

const edges = [
  {
    value: 'edge1-e4:5f:01:70:53:50',
    name: 'edge1-e4:5f:01:70:53:50'
  },
  {
    value: 'edge1-e4:5f:01:70:53:51',
    name: 'edge1-e4:5f:01:70:53:51'
  },
  {
    value: 'edge1-e4:5f:01:70:53:52',
    name: 'edge1-e4:5f:01:70:53:52'
  },
  {
    value: 'edge1-e4:5f:01:70:53:53',
    name: 'edge1-e4:5f:01:70:53:53'
  }
];

const meta = {
  title: 'SELECT/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: edges,
    value: edges[1].value,
  },
};

