import type { StoryObj } from '@storybook/react';
import Spinner from './Spinner'


const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "big",
    color: "#2d4373"
  },
};

