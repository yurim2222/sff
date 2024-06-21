import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Step from './Step'
import { StepBox } from '../atoms';

const steps: StepBox[] = [{
  title: "1단계",
  description: "1단계 모드",
  completed: true,
  active: false
}, {
  title: "2단계",
  description: "2단계 모드",
  completed: true,
  active: false
}, {
  title: "3단계",
  description: "3단계 모드",
  completed: false,
  active: true
}, {
  title: "4단계",
  description: "4단계 모드",
  completed: false,
  active: false
}]


const meta = {
  title: 'UI/Step',
  component: Step,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    steps: steps
  },
};

