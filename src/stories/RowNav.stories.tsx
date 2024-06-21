import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import RowNav from './RowNav'

const meta = {
  title: 'MENU/RowNav',
  component: RowNav,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
}



export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    menu: [{ text: '텍스트1', click: () => console.log('text1') }, { text: '텍스트2', click: () => console.log('text2') }, { text: '텍스트3', click: () => console.log('text3') }]
  },
};

