import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Menu from './Menu'

const withCustomDecorator = (StoryComponent: React.ComponentType) => (
  <div style={{ height: '100px', textAlign: 'center', padding: '100px', overflow: 'hidden' }}>
    < StoryComponent />
  </div>
);

const meta = {
  title: 'MENU/Menu',
  component: Menu,
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
    menu: [
      {
        title: '상위메뉴1', sub: [
          { text: '하위메뉴1', click: () => alert('하위메뉴1') },
          { text: '하위메뉴2', click: () => alert('하위메뉴3') },
          { text: '하위메뉴3', click: () => alert('하위메뉴3') }
        ]
      },
      { title: '상위메뉴2', sub: [{ text: '하위메뉴2', click: () => alert('하위메뉴2') }] },
      { title: '상위메뉴3', sub: [{ text: '하위메뉴3', click: () => alert('하위메뉴3') }] }
    ],
    type: 'total'
  },
};

