import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Tooltip from './Tooltip'

const withCustomDecorator = (StoryComponent: React.ComponentType) => (
  <div style={{ height: '80px' }}>
    < StoryComponent />
  </div>
);

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  decorators: [withCustomDecorator],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
}



export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "click",
    text: "Show Tootip Box",
    position: "leftBottom",
    children: "좌측 하단"
  },
};

