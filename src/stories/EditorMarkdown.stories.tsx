import type { Meta, StoryObj } from '@storybook/react';
import MarkdownEditor from './EditorMarkdown'



const meta = {
  title: 'Editor/Markdown',
  component: MarkdownEditor,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleChange: (value: string) => { console.log(value); }
  }
}
