import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Dialog } from './Dialog'
import Button from './Button';

const withCustomDecorator = (StoryComponent: React.ComponentType) => (
  <div style={{ height: '100px', textAlign: 'center', padding: '100px', overflow: 'hidden' }}>
    < StoryComponent />
  </div>
);


const meta = {
  title: 'Modal/Dialog',
  component: Dialog,
  decorators: [withCustomDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: { inlineStories: false, height: 600 },
    previewTabs: {
      docs: { hidden: true },
      'storybook/docs/panel': { index: -1 }
    },
  },
  tags: ['autodocs'],
}
export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDialog: Story = {
  args: {
    button: <Button
      color="#2d4373"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      Open Dialog
    </Button>,
    dialogMsg: "open dialog",
    layout: 'basic',
    fullScreen: false,
    closeHandle: () => { console.log("함수 실행") }
  },
};

export const FullDialog: Story = {
  args: {
    button: <Button
      color="#c12322"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      Open Dialog
    </Button>,
    dialogMsg: "open dialog",
    layout: 'center',
    fullScreen: true,
    closeHandle: () => { console.log("함수 실행") }
  },
};

