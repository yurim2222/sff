import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Radio from './Radio';
const edgeList =
  [
    { title: 'edge1 - e4:5f:01:70:53:50', val: 'edge1 - e4:5f:01:70:53:50' },
    { title: 'edge1 - e4:5f:01:70:53:51', val: 'edge1 - e4:5f:01:70:53:51' },
    { title: 'edge1 - e4:5f:01:70:53:52', val: 'edge1 - e4:5f:01:70:53:52' },
    { title: 'edge1 - e4:5f:01:70:53:53', val: 'edge1 - e4:5f:01:70:53:53' }
  ];
const meta = {
  title: 'INPUT/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    values: edgeList,
    value: edgeList[0],
    name: "edge"
  },
};
