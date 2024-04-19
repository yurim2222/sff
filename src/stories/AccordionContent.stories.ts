import type { StoryObj } from '@storybook/react';
import { AccordionContentProps } from '../atoms';
import AccordionContent from './AccordionContent';

const accordionType1: AccordionContentProps = {
  type: 'each',
  accordion: [
    { title: "Title1", content: "얼마나 피가 싸인 뭇 대고, 사막이다. 어디 가슴에 같이, 것이다. 보라, 생생하며, 품으며, 뿐이다. 살았으며, 많이 어디 내려온 얼마나 것이 인간이 같이, 것이다. 인생의 어디 황금시대의 방지하는 속잎나고, 인도하겠다는 아름다우냐? 대중을 얼음과 용감하고 우는 가진 천하를 이상의 같이, 아니다." },
    {
      title: "Title2", content: "목숨을 같이, 위하여, 인생을 뿐이다. 가슴에 가슴이 내려온 사랑의 석가는 할지니, 끓는다.위하여 얼음이 우리 사는가별과 크고 것이다.몸이 뜨고, 밥을 황금시대다. 열락의 있는 이는 지혜는 따뜻한 있으며, 붙잡아 피다."
    },
    {
      title: "Title3", content: " 그들은 사랑의 피부가 인생에 뜨거운지라, 운다. 아름답고 봄바람을 구하지 피다.그들의 보내는 현저하게 창공에 든 품에 인간은 청춘의 아름다우냐? 소금이라 방황하였으며, 이것을 이상, 찬미를 운다.스며들어 밝은 방지하는 속잎나고, 안고, 살 따뜻한 방황하였으며, 것은 교향악이다."
    }]
}

const accordionType2: AccordionContentProps = {
  type: 'toggle',
  accordion: [
    { title: "Title1", content: "얼마나 피가 싸인 뭇 대고, 사막이다. 어디 가슴에 같이, 것이다. 보라, 생생하며, 품으며, 뿐이다. 살았으며, 많이 어디 내려온 얼마나 것이 인간이 같이, 것이다. 인생의 어디 황금시대의 방지하는 속잎나고, 인도하겠다는 아름다우냐? 대중을 얼음과 용감하고 우는 가진 천하를 이상의 같이, 아니다." },
    {
      title: "Title2", content: "목숨을 같이, 위하여, 인생을 뿐이다. 가슴에 가슴이 내려온 사랑의 석가는 할지니, 끓는다.위하여 얼음이 우리 사는가별과 크고 것이다.몸이 뜨고, 밥을 황금시대다. 열락의 있는 이는 지혜는 따뜻한 있으며, 붙잡아 피다."
    },
    {
      title: "Title3", content: " 그들은 사랑의 피부가 인생에 뜨거운지라, 운다. 아름답고 봄바람을 구하지 피다.그들의 보내는 현저하게 창공에 든 품에 인간은 청춘의 아름다우냐? 소금이라 방황하였으며, 이것을 이상, 찬미를 운다.스며들어 밝은 방지하는 속잎나고, 안고, 살 따뜻한 방황하였으며, 것은 교향악이다."
    }]
}


const meta = {
  title: 'MENU/AccordionContent',
  component: AccordionContent,
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
