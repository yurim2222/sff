import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import logo from './image/SoxLogo.png';


const meta = {
  title: 'UI/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterComponent: Story = {
  args: {
    logo: `${logo}`, indexUrl: 'https://www.soxcorp.co.kr/SOXHome/', color: "#ccc"
  },
};

