import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SwitchBox from './SwitchBox'



const meta = {
  title: 'UI/Switch',
  component: SwitchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultSelect: true,
  },
};

