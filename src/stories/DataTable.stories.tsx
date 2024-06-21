import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';
import logo from './image/SoxLogo.png';


const meta = {
  title: 'Example/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

const tableHeader = ["name", "cid", "rssi", "mnc", "rsrq", "net_type", "mcc"]

const nodes =
  [
    {
      "name": "가",
      "rssi": 0,
      "mnc": "06",
      "rsrq": -3,
      "net_type": 4,
      "pci": 129,
      "rsrp": -81,
      "band": "2600",
      "time": 1686190877089,
      "mcc": "450",
      "ta": 11,
      "cid": "1071882"
    },
    {
      "name": "바",
      "rssi": -79,
      "mnc": "06",
      "rsrq": -20,
      "net_type": 0,
      "pci": 9,
      "rsrp": -134,
      "band": "3050",
      "time": 1686190877090,
      "mcc": "450",
      "ta": 0,
      "cid": "0"
    },
    {
      "name": "다",
      "rssi": -79,
      "mnc": "06",
      "rsrq": -24,
      "net_type": 0,
      "pci": 430,
      "rsrp": -138,
      "band": "3050",
      "time": 1686190877091,
      "mcc": "453",
      "ta": 0,
      "cid": "0"
    },
    {
      "name": "avd7254",
      "rssi": -79,
      "mnc": "08",
      "rsrq": -26,
      "net_type": 0,
      "pci": 135,
      "rsrp": -140,
      "band": "3050",
      "time": 1686190877091,
      "mcc": "450",
      "ta": 0,
      "cid": "0"
    },
    {
      "name": "avd7254",
      "rssi": -81,
      "mnc": "07",
      "rsrq": -15,
      "net_type": 0,
      "pci": 238,
      "rsrp": -130,
      "band": "100",
      "time": 1686190877092,
      "mcc": "460",
      "ta": 0,
      "cid": "0"
    },
    {
      "name": "mnd7454",
      "rssi": -81,
      "mnc": "06",
      "rsrq": -22,
      "net_type": 0,
      "pci": 394,
      "rsrp": -138,
      "band": "100",
      "time": 1686190877092,
      "mcc": "498",
      "ta": 0,
      "cid": "0"
    },
    {
      "name": "bvd7254",
      "rssi": -81,
      "mnc": "06",
      "rsrq": -23,
      "net_type": 0,
      "pci": 367,
      "rsrp": -139,
      "band": "100",
      "time": 1686190877093,
      "mcc": "450",
      "ta": 0,
      "cid": "0"
    }
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
    page: false,
  },
};

