import type { StoryObj } from '@storybook/react';
import Card from './Card'
import img from './image/content_fip_point_persp.png';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}
export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    img: `${img}`,
    mainText: '달',
    subText: 'moon',
    mainTag: ['달'],
    subTag: ['우주']
  },
};

//