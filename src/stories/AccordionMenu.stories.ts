import type { StoryObj } from '@storybook/react';
import AccordionMenu from './AccordionMenu';
import { AccordionMenuProps } from '../atoms';

const accordionType1: AccordionMenuProps = {
  type: 'each',
  accordion: [
    {
      title: "리스트1", list:
        [{ title: "하위 메뉴1", url: "https://www.naver.com/" },
        { title: "하위 메뉴2", url: "https://www.daum.net" }]
    },
    {
      title: "리스트2", list: [{ title: "하위 텍스트메뉴1" }]
    }
  ]
}

const accordionType2: AccordionMenuProps = {
  type: 'toggle',
  accordion: [
    {
      title: "리스트1", list:
        [{ title: "하위 메뉴1", url: "https://www.naver.com/" },
        { title: "하위 메뉴2", url: "https://www.daum.net" }]
    },
    {
      title: "리스트2", list: [{ title: "하위 텍스트메뉴1" }]
    }
  ]
}


const meta = {
  title: 'MENU/AccordionMenu',
  component: AccordionMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion01: Story = {
  args: {
    type: accordionType1.type,
    accordion: accordionType1.accordion
  },
};
export const Accordion02: Story = {
  args: {
    type: accordionType2.type,
    accordion: accordionType2.accordion
  },
};
