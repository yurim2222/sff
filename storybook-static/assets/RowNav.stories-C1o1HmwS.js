import{j as n}from"./jsx-runtime-Bdgnjw47.js";import"./index-Ccz02SFX.js";const u="_rowNav_prp05_1",p="_pointer_prp05_11",e={rowNav:u,pointer:p};function l({menu:c,cursor:o="pointer"}){return n.jsx("ul",{className:e.rowNav,children:c.map(t=>t.click!==void 0?n.jsx("li",{onClick:t.click,className:o==="pointer"?e.pointer:e.default,children:t.text}):n.jsx("li",{className:o==="pointer"?e.pointer:e.default,children:t.text}))})}l.__docgenInfo={description:"",methods:[],displayName:"RowNav",props:{menu:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string, click?: () => void }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"click",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"{ text: string, click?: () => void }[]"},description:""},cursor:{required:!1,tsType:{name:"union",raw:"'pointer' | 'default'",elements:[{name:"literal",value:"'pointer'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'pointer'",computed:!1}}}};const x={title:"MENU/RowNav",component:l,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{menu:[{text:"텍스트1",click:()=>console.log("text1")},{text:"텍스트2",click:()=>console.log("text2")},{text:"텍스트3",click:()=>console.log("text3")}]}};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    menu: [{
      text: '텍스트1',
      click: () => console.log('text1')
    }, {
      text: '텍스트2',
      click: () => console.log('text2')
    }, {
      text: '텍스트3',
      click: () => console.log('text3')
    }]
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const g=["Primary"];export{r as Primary,g as __namedExportsOrder,x as default};
