import type { Meta, StoryObj } from '@storybook/react';
import BasicEditor from './EditorBasic'



const meta = {
  title: 'Editor/BasicEditor',
  component: BasicEditor,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    clickHandle: (value: string) => console.log(value),
  },
};

