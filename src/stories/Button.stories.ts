import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'INPUT/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#2d4373",
    text: "#fff",
    size: "90px",
    figure: 'rounded',
    children: 'Button',
  },
};
