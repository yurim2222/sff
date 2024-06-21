import{j as e}from"./jsx-runtime-Bdgnjw47.js";import"./index-Ccz02SFX.js";const m="_menu_111th_1",d="_pointer_111th_19",p="_firstMenu_111th_25",x="_eachSubMenu_111th_39",h="_totalMenuDiv_111th_85",v="_menuDiv_111th_111",n={menu:m,pointer:d,firstMenu:p,eachSubMenu:x,totalMenuDiv:h,menuDiv:v};function o({menu:u,type:a="total"}){return e.jsxs("div",{className:n.menuDiv,children:[e.jsx("ul",{className:n.menu,children:u.map(r=>e.jsxs("li",{className:`${n.firstMenu}`,children:[r.title,a==="each"&&e.jsx("ul",{className:n.eachSubMenu,children:r.sub.map(t=>t.click!==void 0?e.jsx("li",{onClick:t.click,children:t.text}):e.jsx("li",{children:t.text}))})]}))}),a==="total"&&e.jsx("div",{className:n.totalMenuDiv,children:u.map(r=>e.jsx("ul",{children:r.sub.map(t=>t.click!==void 0?e.jsx("li",{onClick:t.click,children:t.text}):e.jsx("li",{children:t.text}))}))})]})}o.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{menu:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ title: string, sub: { text: string, click?: () => void }[], }",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sub",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string, click?: () => void }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"click",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"{ text: string, click?: () => void }[]",required:!0}}]}}],raw:"{ title: string, sub: { text: string, click?: () => void }[], }[]"},description:""},type:{required:!1,tsType:{name:"union",raw:"'total' | 'each'",elements:[{name:"literal",value:"'total'"},{name:"literal",value:"'each'"}]},description:"",defaultValue:{value:"'total'",computed:!1}}}};const B=u=>e.jsx("div",{style:{height:"100px",textAlign:"center",padding:"100px",overflow:"hidden"},children:e.jsx(u,{})}),C={title:"MENU/Menu",component:o,decorators:[B],parameters:{layout:"centered"},tags:["autodocs"]},i={args:{menu:[{title:"상위메뉴1",sub:[{text:"하위메뉴1",click:()=>alert("하위메뉴1")},{text:"하위메뉴2",click:()=>alert("하위메뉴3")},{text:"하위메뉴3",click:()=>alert("하위메뉴3")}]},{title:"상위메뉴2",sub:[{text:"하위메뉴2",click:()=>alert("하위메뉴2")}]},{title:"상위메뉴3",sub:[{text:"하위메뉴3",click:()=>alert("하위메뉴3")}]}],type:"total"}};var l,s,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    menu: [{
      title: '상위메뉴1',
      sub: [{
        text: '하위메뉴1',
        click: () => alert('하위메뉴1')
      }, {
        text: '하위메뉴2',
        click: () => alert('하위메뉴3')
      }, {
        text: '하위메뉴3',
        click: () => alert('하위메뉴3')
      }]
    }, {
      title: '상위메뉴2',
      sub: [{
        text: '하위메뉴2',
        click: () => alert('하위메뉴2')
      }]
    }, {
      title: '상위메뉴3',
      sub: [{
        text: '하위메뉴3',
        click: () => alert('하위메뉴3')
      }]
    }],
    type: 'total'
  }
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const _=["Primary"];export{i as Primary,_ as __namedExportsOrder,C as default};
