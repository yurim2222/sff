import type { Meta, StoryObj } from '@storybook/react';
import DataTableExample from './DataTableExample';


const meta = {
  title: 'Example/DataTableEx-2',
  component: DataTableExample,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

const tableHeader = ["name", "gender", "age", "email", "submit"]

const nodes =
  [
    {
      "name": "홍길동",
      "gender": "male",
      "age": 24,
      "email": 'hong@abc.com',
      "submit": false
    },
    {
      "name": "홍김동",
      "gender": "male",
      "age": 24,
      "email": 'hong@abc.com',
      "submit": false
    },
    {
      "name": "김복자",
      "gender": "female",
      "age": 25,
      "email": 'kim@abc.com',
      "submit": true
    },
    {
      "name": "갑을병",
      "gender": "male",
      "age": 24,
      "email": 'gab@abc.com',
      "submit": false
    },
    {
      "name": "박춘배",
      "gender": "male",
      "age": 24,
      "email": 'hong@abc.com',
      "submit": false
    },
    {
      "name": "김철수",
      "gender": "male",
      "age": 24,
      "email": 'kim2@abc.com',
      "submit": true
    },
    {
      "name": "황영희",
      "gender": "female",
      "age": 28,
      "email": 'hwang@abc.com',
      "submit": true
    },
    {
      "name": "이지영",
      "gender": "female",
      "age": 28,
      "email": 'lee@abc.com',
      "submit": false
    },
    {
      "name": "안은영",
      "gender": "female",
      "age": 24,
      "email": 'an@abc.com',
      "submit": false
    },
    {
      "name": "윤진수",
      "gender": "male",
      "age": 24,
      "email": 'yun@abc.com',
      "submit": false
    },
  ];


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tableHeader: tableHeader,
    nodes: nodes,
    stripe: true,
    divideBorder: false,
    bgColor: '#fff',
    searchBox: true,
    page: { page: 0, size: 4 },
    modifyData: false
  },
};

