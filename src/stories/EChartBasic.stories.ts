import type { Meta, StoryObj } from '@storybook/react';
import EChartBasic from './EChartBasic';
import { rangeLabels, visitorData } from './data/chart_resource';



const meta = {
  title: 'EChart/EChartLine',
  component: EChartBasic,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const LineChart: Story = {
  args: {
    type: 'bar',
    title: '주간 방문객',
    labels: rangeLabels,
    data: visitorData,
  },
};