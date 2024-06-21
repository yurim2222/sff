import type { Meta, StoryObj } from '@storybook/react';
import Markdown from './Markdown'



const meta = {
  title: 'UI/Markdown',
  component: Markdown,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
}

const text = "*test*\n\n\n`test`\n\n\n>test\n\n# test\n\n### test"

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: text
  }
}
