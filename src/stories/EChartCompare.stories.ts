import type { Meta, StoryObj } from '@storybook/react';
import EChartCompare from './EChartCompare';
import { modelData } from './data/chart_resource';



const meta = {
  title: 'EChart/EChartCompare',
  component: EChartCompare,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;


export const CompareChart: Story = {
  args: {
    type: 'bar',
    title: 'A B 모델 비교',
    labels: ["A 모델", "B 모델"],
    data: modelData,
  },
};
