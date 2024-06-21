import{j as u}from"./jsx-runtime-Bdgnjw47.js";import{r as T}from"./index-Ccz02SFX.js";import{F as t,f as r,a as j}from"./index-CtWU9uUi.js";import{B as d}from"./Button-z2jgz37x.js";import"./index-CijD0mlS.js";const y="_top_tool_container_la1pn_1",N="_top_tool_container_active_la1pn_19",w="_bottom_tool_container_la1pn_39",O="_bottom_tool_container_active_la1pn_57",k="_left_tool_container_la1pn_77",R="_left_tool_container_active_la1pn_95",I="_right_tool_container_la1pn_115",Y="_right_tool_container_active_la1pn_133",z="_top_x_btn_la1pn_155",H="_side_x_btn_la1pn_169",C={top_tool_container:y,top_tool_container_active:N,bottom_tool_container:w,bottom_tool_container_active:O,left_tool_container:k,left_tool_container_active:R,right_tool_container:I,right_tool_container_active:Y,top_x_btn:z,side_x_btn:H};function S({button:l,position:o,children:e}){const[i,n]=T.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx("div",{onClick:()=>n(F=>!F),children:l}),o==="top"?u.jsxs("div",{className:i?C.top_tool_container_active:C.top_tool_container,children:[u.jsx(t,{icon:r,onClick:()=>n(!1),className:C.top_x_btn}),e]}):o==="bottom"?u.jsxs("div",{className:i?C.bottom_tool_container_active:C.bottom_tool_container,children:[u.jsx(t,{icon:r,onClick:()=>n(!1),className:C.side_x_btn}),e]}):o==="left"?u.jsxs("div",{className:i?C.left_tool_container_active:C.left_tool_container,children:[u.jsx(t,{icon:r,onClick:()=>n(!1),className:C.side_x_btn}),e]}):o==="right"&&u.jsxs("div",{className:i?C.right_tool_container_active:C.right_tool_container,children:[u.jsx(t,{icon:r,onClick:()=>n(!1),className:C.side_x_btn}),e]})]})}S.__docgenInfo={description:"",methods:[],displayName:"SlideTool",props:{button:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!0,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:""},active:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closeBtn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L=l=>u.jsx("div",{style:{minHeight:"500px"},children:u.jsx(l,{})}),X={title:"UI/SlideTool",component:S,decorators:[L],parameters:{layout:"fullscreen"},tags:["autodocs"]},s={args:{button:u.jsx(d,{color:"#c12322",figure:"rounded",onClick:()=>{},size:"90px",text:"#fff",children:"show slide"}),position:"top",active:!1,children:u.jsx("div",{style:{width:"100%",background:"#000",height:"30px"},children:u.jsx("h1",{style:{fontSize:"16px",color:"#fff",textAlign:"center",lineHeight:"30px",margin:"0"},children:"측위 공모전 안내"})}),closeBtn:()=>{}}},B={args:{button:u.jsx(d,{color:"#c12322",figure:"rounded",onClick:()=>{},size:"90px",text:"#fff",children:"show slide"}),position:"bottom",active:!1,children:u.jsxs("div",{style:{width:"100%",background:"#fff",minHeight:"300px",padding:"20px 50px",boxShadow:"0 0 5px rgba(0,0,0,0.2)"},children:[u.jsx("div",{style:{backgroundColor:"#333",width:"200px",height:"100%",minHeight:"260px",float:"left",marginRight:"20px"}}),u.jsxs("div",{children:[u.jsx("h1",{style:{color:"#000",lineHeight:"30px"},children:"수상자 정보"}),u.jsx("h2",{children:"홍길동"}),u.jsx("h3",{children:"최우수상"}),u.jsx("p",{children:"ㅇㅇㅇㅇ대회 ㅁㅁㅁㅁ출품"})]})]}),closeBtn:()=>{}}},a={args:{button:u.jsx(t,{icon:j,style:{fontSize:"18px",cursor:"pointer"}}),position:"right",active:!1,children:u.jsxs("div",{style:{width:"400px"},children:[u.jsx("h1",{style:{color:"#333",textAlign:"center",lineHeight:"30px",fontSize:"34px",marginTop:"30px"},children:"Stay On box"}),u.jsxs("div",{style:{padding:"10px",marginTop:"30px"},children:["대인 및 대물에 대한 위치를 응용하려는 니즈는 많으나 적용할 물리적 환경이 복잡하고 다양함에 따라 도입 시 많은 투자가 필요합니다. STAYON.box는 소프트웨어 플랫폼을 통해 다양한 고객의 환경과 니즈를 충족하면서도 ROI를 만족시킬 위치 솔루션을 제공할 수 있습니다. ",u.jsx("br",{}),u.jsx("br",{}),"STAYON.box STag은 긴급구조 상황에서 구조자의 위치를 빠르고 정확하게 제공하는 복합측위 플랫폼입니다. 긴급상황에서 수집된 GPS,LTE,WiFi,BLE 신호를 복합적으로 분석해서 구조자의 위치를 정확하게 찾아 재난과 위협으로 부터 보호해 줍니다. ",u.jsx("br",{}),u.jsx("br",{}),"STAYON.box Indoor는 WiFi 기술을 이용하여 측위 및 위치인증을 하는 솔루션입니다. 인가된 디바이스의 위치를 찾는 것은 물론 방문객에 대한 데이터를 수집하여 집계하는 서비스를 제공합니다. 또한, STAYON.box Indoor 위치인증 기능을 이용하면 허가된 위치에서만 컨텐츠 열람이나 서비스를 이용하도록 제어할 수 있습니다. (물리보안)"]})]}),closeBtn:()=>{}}},c={args:{button:u.jsx(d,{color:"#c12322",figure:"rounded",onClick:()=>{},size:"90px",text:"#fff",children:"show slide"}),position:"left",active:!1,children:u.jsxs("div",{style:{width:"400px"},children:[u.jsx("h1",{style:{color:"#333",textAlign:"center",lineHeight:"30px",fontSize:"34px",marginTop:"30px"},children:"Stay On box"}),u.jsxs("div",{style:{padding:"10px",marginTop:"30px"},children:["대인 및 대물에 대한 위치를 응용하려는 니즈는 많으나 적용할 물리적 환경이 복잡하고 다양함에 따라 도입 시 많은 투자가 필요합니다. STAYON.box는 소프트웨어 플랫폼을 통해 다양한 고객의 환경과 니즈를 충족하면서도 ROI를 만족시킬 위치 솔루션을 제공할 수 있습니다. ",u.jsx("br",{}),u.jsx("br",{}),"STAYON.box STag은 긴급구조 상황에서 구조자의 위치를 빠르고 정확하게 제공하는 복합측위 플랫폼입니다. 긴급상황에서 수집된 GPS,LTE,WiFi,BLE 신호를 복합적으로 분석해서 구조자의 위치를 정확하게 찾아 재난과 위협으로 부터 보호해 줍니다. ",u.jsx("br",{}),u.jsx("br",{}),"STAYON.box Indoor는 WiFi 기술을 이용하여 측위 및 위치인증을 하는 솔루션입니다. 인가된 디바이스의 위치를 찾는 것은 물론 방문객에 대한 데이터를 수집하여 집계하는 서비스를 제공합니다. 또한, STAYON.box Indoor 위치인증 기능을 이용하면 허가된 위치에서만 컨텐츠 열람이나 서비스를 이용하도록 제어할 수 있습니다. (물리보안)"]})]}),closeBtn:()=>{}}};var D,p,x;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    button: <Button color="#c12322" figure="rounded" onClick={() => {}} size="90px" text="#fff">\r
      show slide\r
    </Button>,
    position: 'top',
    active: false,
    children: <div style={{
      width: '100%',
      background: "#000",
      height: '30px'
    }}>\r
      <h1 style={{
        fontSize: '16px',
        color: "#fff",
        textAlign: "center",
        lineHeight: "30px",
        margin: '0'
      }}>측위 공모전 안내</h1>\r
    </div>,
    closeBtn: () => {}
  }
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var _,A,h;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    button: <Button color="#c12322" figure="rounded" onClick={() => {}} size="90px" text="#fff">\r
      show slide\r
    </Button>,
    position: 'bottom',
    active: false,
    children: <div style={{
      width: '100%',
      background: "#fff",
      minHeight: '300px',
      padding: '20px 50px',
      boxShadow: '0 0 5px rgba(0,0,0,0.2)'
    }}>\r
      <div style={{
        backgroundColor: "#333",
        width: '200px',
        height: '100%',
        minHeight: '260px',
        float: 'left',
        marginRight: '20px'
      }}></div>\r
      <div>\r
        <h1 style={{
          color: "#000",
          lineHeight: "30px"
        }}>수상자 정보</h1>\r
        <h2>홍길동</h2>\r
        <h3>최우수상</h3>\r
        <p>ㅇㅇㅇㅇ대회 ㅁㅁㅁㅁ출품</p>\r
      </div>\r
    </div>,
    closeBtn: () => {}
  }
}`,...(h=(A=B.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var E,g,f;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    button: <FontAwesomeIcon icon={faBars} style={{
      fontSize: '18px',
      cursor: 'pointer'
    }} />,
    position: 'right',
    active: false,
    children: <div style={{
      width: '400px'
    }}>\r
      <h1 style={{
        color: "#333",
        textAlign: "center",
        lineHeight: "30px",
        fontSize: "34px",
        marginTop: "30px"
      }}>Stay On box</h1>\r
      <div style={{
        padding: '10px',
        marginTop: "30px"
      }}>대인 및 대물에 대한 위치를 응용하려는 니즈는 많으나 적용할 물리적 환경이 복잡하고\r
        다양함에 따라 도입 시 많은 투자가 필요합니다. STAYON.box는 소프트웨어 플랫폼을\r
        통해 다양한 고객의 환경과 니즈를 충족하면서도 ROI를 만족시킬 위치 솔루션을\r
        제공할 수 있습니다. <br /><br />\r
\r
        STAYON.box STag은 긴급구조 상황에서 구조자의 위치를 빠르고 정확하게 제공하는\r
        복합측위 플랫폼입니다. 긴급상황에서 수집된 GPS,LTE,WiFi,BLE 신호를 복합적으로\r
        분석해서 구조자의 위치를 정확하게 찾아 재난과 위협으로 부터 보호해 줍니다. <br /><br />\r
\r
        STAYON.box Indoor는 WiFi 기술을 이용하여 측위 및 위치인증을 하는 솔루션입니다.\r
        인가된 디바이스의 위치를 찾는 것은 물론 방문객에 대한 데이터를 수집하여 집계하는\r
        서비스를 제공합니다. 또한, STAYON.box Indoor 위치인증 기능을 이용하면 허가된\r
        위치에서만 컨텐츠 열람이나 서비스를 이용하도록 제어할 수 있습니다. (물리보안)</div>\r
    </div>,
    closeBtn: () => {}
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var m,b,v;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    button: <Button color="#c12322" figure="rounded" onClick={() => {}} size="90px" text="#fff">\r
      show slide\r
    </Button>,
    position: 'left',
    active: false,
    children: <div style={{
      width: '400px'
    }}>\r
      <h1 style={{
        color: "#333",
        textAlign: "center",
        lineHeight: "30px",
        fontSize: "34px",
        marginTop: "30px"
      }}>Stay On box</h1>\r
      <div style={{
        padding: '10px',
        marginTop: "30px"
      }}>대인 및 대물에 대한 위치를 응용하려는 니즈는 많으나 적용할 물리적 환경이 복잡하고\r
        다양함에 따라 도입 시 많은 투자가 필요합니다. STAYON.box는 소프트웨어 플랫폼을\r
        통해 다양한 고객의 환경과 니즈를 충족하면서도 ROI를 만족시킬 위치 솔루션을\r
        제공할 수 있습니다. <br /><br />\r
\r
        STAYON.box STag은 긴급구조 상황에서 구조자의 위치를 빠르고 정확하게 제공하는\r
        복합측위 플랫폼입니다. 긴급상황에서 수집된 GPS,LTE,WiFi,BLE 신호를 복합적으로\r
        분석해서 구조자의 위치를 정확하게 찾아 재난과 위협으로 부터 보호해 줍니다. <br /><br />\r
\r
        STAYON.box Indoor는 WiFi 기술을 이용하여 측위 및 위치인증을 하는 솔루션입니다.\r
        인가된 디바이스의 위치를 찾는 것은 물론 방문객에 대한 데이터를 수집하여 집계하는\r
        서비스를 제공합니다. 또한, STAYON.box Indoor 위치인증 기능을 이용하면 허가된\r
        위치에서만 컨텐츠 열람이나 서비스를 이용하도록 제어할 수 있습니다. (물리보안)</div>\r
    </div>,
    closeBtn: () => {}
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const J=["Top","Bottom","Right","Left"];export{B as Bottom,c as Left,a as Right,s as Top,J as __namedExportsOrder,X as default};
