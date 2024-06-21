import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Prompt } from './Prompt'
import Button from './Button';

const withCustomDecorator = (StoryComponent: React.ComponentType) => (
  <div style={{ height: '100px', textAlign: 'center', padding: '100px', overflow: 'hidden' }}>
    < StoryComponent />
  </div>
);


const meta = {
  title: 'MODAL/Prompt',
  component: Prompt,
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

export const Primary: Story = {
  args: {
    button: <Button
      color="#c12322"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      Open Prompt
    </Button>,
    dialogMsg: "open prompt",
    layout: 'basic',
    fullScreen: false,
    motion: true,
    submitHandle: (value) => { console.log(value) }
  },
};
