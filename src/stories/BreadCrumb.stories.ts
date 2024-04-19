import type { StoryObj } from '@storybook/react';
import BreadCrumb from './BreadCrumb';
import { BreadcrumbItem } from '../atoms';

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Library', path: '/library' },
  { label: 'Data', path: '/library/data' }
];

const meta = {
  title: 'UI/BreadCrumb',
  component: BreadCrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumb: Story = {
  args: {
    items: breadcrumbItems
  },
};

