import type { Meta, StoryObj } from '@storybook/react';
import EChartCircle from './EChartCircle';
import { hobbyData, rangeLabels } from './data/chart_resource';



const meta = {
  title: 'EChart/EChartCircle',
  component: EChartCircle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleChart: Story = {
  args: {
    title: '30대 직장인 취미',
    labels: rangeLabels,
    data: hobbyData,
  },
};
