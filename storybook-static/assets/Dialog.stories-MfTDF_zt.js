import{j as e}from"./jsx-runtime-Bdgnjw47.js";import{r as y}from"./index-Ccz02SFX.js";import{B as a}from"./Button-z2jgz37x.js";const D="_screenContainer_ba9os_1",j="_slidein_ba9os_1",v="_dialogContainerFullScreen_ba9os_23",S="_dialogContainer_ba9os_23",B="_textContainerBasic_ba9os_85",w="_textContainerCenter_ba9os_95",F="_buttonContainerCenter_ba9os_103",N="_buttonContainer_ba9os_103",n={screenContainer:D,slidein:j,dialogContainerFullScreen:v,dialogContainer:S,textContainerBasic:B,textContainerCenter:w,buttonContainerCenter:F,buttonContainer:N},m=({button:r,dialogMsg:x,layout:s,fullScreen:f,closeHandle:i})=>{const[b,l]=y.useState(!1),_=()=>{i&&i(),l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>l(h=>!h),children:r}),b?e.jsx("div",{className:n.screenContainer,children:e.jsxs("div",{className:f?n.dialogContainerFullScreen:n.dialogContainer,children:[e.jsx("div",{className:s==="center"?n.textContainerCenter:n.textContainerBasic,children:x}),e.jsx("div",{className:s==="center"?n.buttonContainerCenter:n.buttonContainer,children:e.jsx(a,{onClick:_,color:"gray",children:"확인"})})]})}):e.jsx(e.Fragment,{})]})};m.__docgenInfo={description:`- Prompt dialog\r
- button은 컴포넌트로 직접 props에 전달한다\r
- dialog를 닫은 후 특정 함수를 실행시키고 싶다면 closeHandle에 전달한다.\r
- 예를들어 dialog를 닫은 후 메인페이지로 이동하게 된다면 closeHandle={()=>navigate('/main')} (useNavigate사용)`,methods:[],displayName:"Dialog",props:{button:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dialogMsg:{required:!0,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'basic' | 'center'",elements:[{name:"literal",value:"'basic'"},{name:"literal",value:"'center'"}]},description:""},fullScreen:{required:!1,tsType:{name:"boolean"},description:""},closeHandle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k=r=>e.jsx("div",{style:{height:"100px",textAlign:"center",padding:"100px",overflow:"hidden"},children:e.jsx(r,{})}),q={title:"Modal/Dialog",component:m,decorators:[k],parameters:{layout:"fullscreen",docs:{inlineStories:!1,height:600},previewTabs:{docs:{hidden:!0},"storybook/docs/panel":{index:-1}}},tags:["autodocs"]},o={args:{button:e.jsx(a,{color:"#2d4373",figure:"rounded",onClick:()=>{},size:"90px",text:"#fff",children:"Open Dialog"}),dialogMsg:"open dialog",layout:"basic",fullScreen:!1,closeHandle:()=>{console.log("함수 실행")}}},t={args:{button:e.jsx(a,{color:"#c12322",figure:"rounded",onClick:()=>{},size:"90px",text:"#fff",children:"Open Dialog"}),dialogMsg:"open dialog",layout:"center",fullScreen:!0,closeHandle:()=>{console.log("함수 실행")}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    button: <Button color="#2d4373" figure="rounded" onClick={() => {}} size="90px" text="#fff">\r
      Open Dialog\r
    </Button>,
    dialogMsg: "open dialog",
    layout: 'basic',
    fullScreen: false,
    closeHandle: () => {
      console.log("함수 실행");
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,p,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    button: <Button color="#c12322" figure="rounded" onClick={() => {}} size="90px" text="#fff">\r
      Open Dialog\r
    </Button>,
    dialogMsg: "open dialog",
    layout: 'center',
    fullScreen: true,
    closeHandle: () => {
      console.log("함수 실행");
    }
  }
}`,...(C=(p=t.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};const E=["BasicDialog","FullDialog"];export{o as BasicDialog,t as FullDialog,E as __namedExportsOrder,q as default};
