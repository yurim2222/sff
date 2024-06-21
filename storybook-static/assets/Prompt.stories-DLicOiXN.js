import{j as e}from"./jsx-runtime-Bdgnjw47.js";import{r as l}from"./index-Ccz02SFX.js";import{B as a}from"./Button-z2jgz37x.js";import{s as t}from"./Prompt.module-Cv3sv5aZ.js";const p=({button:r,type:m,layout:i,fullScreen:f,dialogMsg:g,defaultVal:x,submitHandle:b})=>{const[y,s]=l.useState(!1),o=l.useRef(null),h=()=>{o.current&&b(o.current.value),s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>s(v=>!v),children:r}),y?e.jsx("div",{className:t.screenContainer,children:e.jsxs("div",{className:f?t.dialogContainerFullScreen:t.dialogContainer,children:[e.jsx("div",{className:i==="center"?t.textContainerCenter:t.textContainerBasic,children:g}),e.jsx("input",{type:m,className:t.inputArea,ref:o,defaultValue:x}),e.jsxs("div",{className:i==="center"?t.buttonContainerCenter:t.buttonContainer,children:[e.jsx(a,{onClick:()=>s(!1),color:"gray",children:"취소"}),e.jsx(a,{onClick:h,children:"확인"})]})]})}):e.jsx(e.Fragment,{})]})};p.__docgenInfo={description:`- Prompt dialog\r
- button은 컴포넌트로 직접 props에 전달한다\r
- input칸을 통해 입력된 value는 submitHandle을 통해 props로 전달된다.\r
- 해당 value를 사용하고 싶다면 prompt를 사용하는 컴포넌트에서 함수를 만들어 submitHandle을 통해 전달한다.\r
- 예를들어 입력된 value값을 alertd로 출력하고 싶다면, submitHandle={(value)=>alert(value)}를 전달해준다.`,methods:[],displayName:"Prompt",props:{button:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"string"},description:""},dialogMsg:{required:!0,tsType:{name:"string"},description:""},defaultVal:{required:!1,tsType:{name:"string"},description:""},submitHandle:{required:!0,tsType:{name:"signature",type:"function",raw:"(text?: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},layout:{required:!1,tsType:{name:"union",raw:"'basic' | 'center'",elements:[{name:"literal",value:"'basic'"},{name:"literal",value:"'center'"}]},description:""},fullScreen:{required:!1,tsType:{name:"boolean"},description:""},motion:{required:!1,tsType:{name:"boolean"},description:""}}};const j=r=>e.jsx("div",{style:{height:"100px",textAlign:"center",padding:"100px",overflow:"hidden"},children:e.jsx(r,{})}),N={title:"MODAL/Prompt",component:p,decorators:[j],parameters:{layout:"fullscreen",docs:{inlineStories:!1,height:600},previewTabs:{docs:{hidden:!0},"storybook/docs/panel":{index:-1}}},tags:["autodocs"]},n={args:{button:e.jsx(a,{color:"#c12322",figure:"rounded",onClick:()=>{},size:"90px",text:"#fff",children:"Open Prompt"}),dialogMsg:"open prompt",layout:"basic",fullScreen:!1,motion:!0,submitHandle:r=>{console.log(r)}}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    button: <Button color="#c12322" figure="rounded" onClick={() => {}} size="90px" text="#fff">\r
      Open Prompt\r
    </Button>,
    dialogMsg: "open prompt",
    layout: 'basic',
    fullScreen: false,
    motion: true,
    submitHandle: value => {
      console.log(value);
    }
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const P=["Primary"];export{n as Primary,P as __namedExportsOrder,N as default};
