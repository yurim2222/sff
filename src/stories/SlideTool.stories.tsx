import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SlideTool from './SlideTool'
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const withCustomDecorator = (StoryComponent: React.ComponentType) => (
  <div style={{ minHeight: '500px' }}>
    < StoryComponent />
  </div>
);

const meta = {
  title: 'UI/SlideTool',
  component: SlideTool,
  decorators: [withCustomDecorator],
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
}



export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    button: <Button
      color="#c12322"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      show slide
    </Button>,
    position: 'top',
    active: false,
    children: <div style={{ width: '100%', background: "#000", height: '30px' }}>
      <h1 style={{ fontSize: '16px', color: "#fff", textAlign: "center", lineHeight: "30px", margin: '0' }}>측위 공모전 안내</h1>
    </div>,
    closeBtn: () => { }
  },
};

export const Bottom: Story = {
  args: {
    button: <Button
      color="#c12322"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      show slide
    </Button>,
    position: 'bottom',
    active: false,
    children: <div style={{ width: '100%', background: "#fff", minHeight: '300px', padding: '20px 50px', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}>
      <div style={{ backgroundColor: "#333", width: '200px', height: '100%', minHeight: '260px', float: 'left', marginRight: '20px' }}></div>
      <div>
        <h1 style={{ color: "#000", lineHeight: "30px" }}>수상자 정보</h1>
        <h2>홍길동</h2>
        <h3>최우수상</h3>
        <p>ㅇㅇㅇㅇ대회 ㅁㅁㅁㅁ출품</p>
      </div>
    </div>,
    closeBtn: () => { }
  },
};


export const Right: Story = {
  args: {
    button: <FontAwesomeIcon icon={faBars} style={{ fontSize: '18px', cursor: 'pointer' }} />,
    position: 'right',
    active: false,
    children: <div style={{ width: '400px' }}>
      <h1 style={{ color: "#333", textAlign: "center", lineHeight: "30px", fontSize: "34px", marginTop: "30px" }}>Stay On box</h1>
      <div style={{ padding: '10px', marginTop: "30px" }}>대인 및 대물에 대한 위치를 응용하려는 니즈는 많으나 적용할 물리적 환경이 복잡하고
        다양함에 따라 도입 시 많은 투자가 필요합니다. STAYON.box는 소프트웨어 플랫폼을
        통해 다양한 고객의 환경과 니즈를 충족하면서도 ROI를 만족시킬 위치 솔루션을
        제공할 수 있습니다. <br /><br />

        STAYON.box STag은 긴급구조 상황에서 구조자의 위치를 빠르고 정확하게 제공하는
        복합측위 플랫폼입니다. 긴급상황에서 수집된 GPS,LTE,WiFi,BLE 신호를 복합적으로
        분석해서 구조자의 위치를 정확하게 찾아 재난과 위협으로 부터 보호해 줍니다. <br /><br />

        STAYON.box Indoor는 WiFi 기술을 이용하여 측위 및 위치인증을 하는 솔루션입니다.
        인가된 디바이스의 위치를 찾는 것은 물론 방문객에 대한 데이터를 수집하여 집계하는
        서비스를 제공합니다. 또한, STAYON.box Indoor 위치인증 기능을 이용하면 허가된
        위치에서만 컨텐츠 열람이나 서비스를 이용하도록 제어할 수 있습니다. (물리보안)</div>
    </div>,
    closeBtn: () => { }
  },
};

export const Left: Story = {
  args: {
    button: <Button
      color="#c12322"
      figure="rounded"
      onClick={() => { }}
      size="90px"
      text="#fff"
    >
      show slide
    </Button>,
    position: 'left',
    active: false,
    children: <div style={{ width: '400px' }}>
      <h1 style={{ color: "#333", textAlign: "center", lineHeight: "30px", fontSize: "34px", marginTop: "30px" }}>Stay On box</h1>
      <div style={{ padding: '10px', marginTop: "30px" }}>대인 및 대물에 대한 위치를 응용하려는 니즈는 많으나 적용할 물리적 환경이 복잡하고
        다양함에 따라 도입 시 많은 투자가 필요합니다. STAYON.box는 소프트웨어 플랫폼을
        통해 다양한 고객의 환경과 니즈를 충족하면서도 ROI를 만족시킬 위치 솔루션을
        제공할 수 있습니다. <br /><br />

        STAYON.box STag은 긴급구조 상황에서 구조자의 위치를 빠르고 정확하게 제공하는
        복합측위 플랫폼입니다. 긴급상황에서 수집된 GPS,LTE,WiFi,BLE 신호를 복합적으로
        분석해서 구조자의 위치를 정확하게 찾아 재난과 위협으로 부터 보호해 줍니다. <br /><br />

        STAYON.box Indoor는 WiFi 기술을 이용하여 측위 및 위치인증을 하는 솔루션입니다.
        인가된 디바이스의 위치를 찾는 것은 물론 방문객에 대한 데이터를 수집하여 집계하는
        서비스를 제공합니다. 또한, STAYON.box Indoor 위치인증 기능을 이용하면 허가된
        위치에서만 컨텐츠 열람이나 서비스를 이용하도록 제어할 수 있습니다. (물리보안)</div>
    </div>,
    closeBtn: () => { }
  },
};