import{j as t}from"./jsx-runtime-Bdgnjw47.js";import{r}from"./index-Ccz02SFX.js";import{s as M,o as X,x as Z}from"./DataTableCustom.module-BUTpeo_u.js";import{K as ee,r as ae,f as te,s as m,h as ne,i as se,Q as re,O as oe,o as le,a as ie,b as p}from"./pagination-D5xxvu6c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D8_Koz8h.js";function k({tableHeader:d,nodes:x,divideBorder:y=!0,stripe:j=!1,bgColor:C="#fff",searchBox:v=!0,page:g,handleChange:u}){const[l,f]=r.useState(null),c=(e,a,n)=>{e.target.localName==="button"?f(null):f({rowIndex:a,columnIndex:n})},[i,F]=r.useState(""),[S,z]=r.useState(d[0]),V=e=>{F(e.target.value)},o={nodes:x.filter(e=>typeof e[S]=="string"?e[S].toLowerCase().includes(i.toLowerCase()):e[S].toString().includes(i))},T={string:e=>a=>a.sort((n,s)=>n[e].localeCompare(s[e])),number:e=>a=>a.sort((n,s)=>n[e]-s[e]),default:e=>a=>a},_=e=>isNaN(o.nodes[0][e])?isNaN(o.nodes[0][e])?T.string(e):a=>a:T.number(e),$=(e,a)=>_(e)(a),P=o.nodes,[N,R]=r.useState(P),A=ee(o,{onChange:(e,a)=>{const n=$(a.sortKey,o.nodes);R(n),q(!0)}},{sortIcon:{size:"10px"},sortFns:{sortData:N}}),[H,q]=r.useState(!1);r.useEffect(()=>{q(!1)},[N,H]);const[K,L]=r.useState(null),O=e=>{L(e)},W=(e,a,n)=>o.nodes.map((s,J)=>J===n?{...e,[a]:K}:s),[D,Y]=r.useState(),Q=(e,a,n)=>{const s=W(e,a,n);Y(()=>s)};r.useEffect(()=>{u&&D&&u(D)},[u,D]);const U=ae({Table:`
    .table{
      font-size:30px;
    }


  `,HeaderRow:`
        .th {
          border-bottom: 1px solid #a0a8ae;
          background: ${C};
        }
      `,BaseCell:`
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }

        padding: 8px 16px;
      `}),h=te(o,{state:g!==!1?g:void 0,onChange:G});function G(e,a){console.log(e,a)}return t.jsx("div",{className:`${y?m.divideBorder:""} ${j?m.stripe:""} ${M.custonTable}`,children:t.jsxs("div",{className:m.tableUi,children:[t.jsx("select",{onChange:e=>z(e.target.value),children:d.map(e=>t.jsx("option",{value:e,children:e}))}),v&&t.jsx("label",{htmlFor:"search",children:t.jsx("input",{id:"search",type:"text",value:i,onChange:V,className:m.searchInput})}),t.jsx("br",{}),t.jsx(ne,{data:o,theme:U,sort:A,pagination:h,children:e=>t.jsxs(t.Fragment,{children:[t.jsx(se,{children:t.jsx(re,{children:d.map(a=>t.jsx(oe,{sortKey:a,children:a}))})}),t.jsx(le,{children:e.map((a,n)=>t.jsxs(ie,{item:a,children:[t.jsx(p,{onClick:s=>c(s,n,0),children:a.name}),t.jsx(p,{onClick:s=>c(s,n,1),children:a.gender}),t.jsx(p,{onClick:s=>c(s,n,2),children:a.age}),t.jsx(p,{onClick:s=>c(s,n,3),children:l&&l.rowIndex===n&&l.columnIndex===3?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",defaultValue:a.email,onChange:s=>O(s.target.value)}),t.jsx("button",{style:{border:"1px solid #333",transform:"translateY(1px)",padding:"1px 2px",marginLeft:"3px",marginRight:"3px"},onClick:s=>Q(a,"email",n),children:"변경"}),t.jsx("button",{style:{border:"1px solid #333",transform:"translateY(1px)",padding:"1px 2px"},children:"취소"})]}):a.email}),t.jsx(p,{children:a.submit?t.jsx("img",{src:X,alt:"o"}):t.jsx("img",{src:Z,alt:"x"})})]},n))})]})}),t.jsx("br",{}),t.jsx("div",{style:{textAlign:"center"},children:t.jsx("span",{className:m.pagination,children:h.state.getPages(o.nodes).map((e,a)=>t.jsx("button",{type:"button",style:{fontWeight:h.state.page===a?"bold":"normal"},onClick:()=>h.fns.onSetPage(a),children:a+1},a))})}),t.jsx("br",{})]})})}k.__docgenInfo={description:"",methods:[],displayName:"DataTableWithInput",props:{tableHeader:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},nodes:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},divideBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stripe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#fff"',computed:!1}},searchBox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},page:{required:!0,tsType:{name:"union",raw:"false | { page: number, size: number }",elements:[{name:"literal",value:"false"},{name:"signature",type:"object",raw:"{ page: number, size: number }",signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"size",value:{name:"number",required:!0}}]}}]},description:""},modifyData:{required:!1,tsType:{name:"boolean"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};function B({tableHeader:d,nodes:x,stripe:y,divideBorder:j,bgColor:C,searchBox:v,page:g,modifyData:u}){const[l,f]=r.useState(x),c=i=>{f(()=>i)};return r.useEffect(()=>{console.log(l)},[l]),t.jsx("div",{children:t.jsx(k,{tableHeader:d,nodes:l,stripe:y,divideBorder:j,bgColor:C,searchBox:v,modifyData:u,page:g,handleChange:i=>c(i)})})}B.__docgenInfo={description:`- custom table의 경우 직접 table컴포넌트를 수정한다.\r
- input 요소가 전부 들어가지 않는 경우 셀을 map을 통해 만들지 않고 정적으로 생성해주었다.`,methods:[],displayName:"DataTableExample"};const be={title:"Example/DataTableEx-2",component:B,parameters:{layout:"fullscreen"},tags:["autodocs"]},ce=["name","gender","age","email","submit"],de=[{name:"홍길동",gender:"male",age:24,email:"hong@abc.com",submit:!1},{name:"홍김동",gender:"male",age:24,email:"hong@abc.com",submit:!1},{name:"김복자",gender:"female",age:25,email:"kim@abc.com",submit:!0},{name:"갑을병",gender:"male",age:24,email:"gab@abc.com",submit:!1},{name:"박춘배",gender:"male",age:24,email:"hong@abc.com",submit:!1},{name:"김철수",gender:"male",age:24,email:"kim2@abc.com",submit:!0},{name:"황영희",gender:"female",age:28,email:"hwang@abc.com",submit:!0},{name:"이지영",gender:"female",age:28,email:"lee@abc.com",submit:!1},{name:"안은영",gender:"female",age:24,email:"an@abc.com",submit:!1},{name:"윤진수",gender:"male",age:24,email:"yun@abc.com",submit:!1}],b={args:{tableHeader:ce,nodes:de,stripe:!0,divideBorder:!1,bgColor:"#fff",searchBox:!0,page:{page:0,size:4},modifyData:!1}};var w,E,I;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tableHeader: tableHeader,
    nodes: nodes,
    stripe: true,
    divideBorder: false,
    bgColor: '#fff',
    searchBox: true,
    page: {
      page: 0,
      size: 4
    },
    modifyData: false
  }
}`,...(I=(E=b.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const xe=["Primary"];export{b as Primary,xe as __namedExportsOrder,be as default};
