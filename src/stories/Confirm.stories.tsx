import type { StoryObj } from '@storybook/react';
import { Confirm } from './Confirm'
import SButton from './SButton';

const withCustomDecorator = (StoryComponent: React.ComponentType) => (
  <div style={{ height: '100px', textAlign: 'center', padding: '100px', overflow: 'hidden' }}>
    < StoryComponent />
  </div>
);


const meta = {
  title: 'Modal/Confirm',
  component: Confirm,
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
    button: <SButton
      color="#c12322"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      Open Confirm
    </SButton>,
    dialogMsg: "open alert",
    layout: 'basic',
    fullScreen: false,
    submitHandle: () => { console.log("confirm") }
  },
};
