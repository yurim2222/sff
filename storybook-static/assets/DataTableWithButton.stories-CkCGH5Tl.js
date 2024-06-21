import{j as a}from"./jsx-runtime-Bdgnjw47.js";import{r as n}from"./index-Ccz02SFX.js";import{s as A,o as K,x as O}from"./DataTableCustom.module-BUTpeo_u.js";import{K as R,r as W,f as k,s as o,h as L,i as M,Q,O as U,o as G,a as J,b as i}from"./pagination-D5xxvu6c.js";import{B as X}from"./Button-z2jgz37x.js";import{C as Y}from"./Confirm-ISRZsbku.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D8_Koz8h.js";import"./Prompt.module-Cv3sv5aZ.js";function v({tableHeader:d,nodes:C,divideBorder:S=!0,stripe:T=!1,bgColor:B="#fff",searchBox:q=!0,page:g,handleChange:ae}){const[u,D]=n.useState(""),[c,w]=n.useState(d[0]),N=e=>{D(e.target.value)},r={nodes:C.filter(e=>typeof e[c]=="string"?e[c].toLowerCase().includes(u.toLowerCase()):e[c].toString().includes(u))},f={string:e=>t=>t.sort((s,p)=>s[e].localeCompare(p[e])),number:e=>t=>t.sort((s,p)=>s[e]-p[e]),default:e=>t=>t},z=e=>isNaN(r.nodes[0][e])?isNaN(r.nodes[0][e])?f.string(e):t=>t:f.number(e),E=(e,t)=>z(e)(t),F=r.nodes,[b,$]=n.useState(F),_=R(r,{onChange:H},{sortIcon:{size:"10px"},sortFns:{sortData:b}}),[P,x]=n.useState(!1);n.useEffect(()=>{x(!1)},[b,P]);function H(e,t){const s=E(t.sortKey,r.nodes);$(s),x(!0)}const I=W({Table:`
    .table{
      font-size:30px;
    }


  `,HeaderRow:`
        .th {
          border-bottom: 1px solid #a0a8ae;
          background: ${B};
        }
      `,BaseCell:`
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }

        padding: 8px 16px;
      `}),l=k(r,{state:g!==!1?g:void 0,onChange:V});function V(e,t){console.log(e,t)}return a.jsx("div",{className:`${S?o.divideBorder:""} ${T?o.stripe:""} ${A.custonTable}`,children:a.jsxs("div",{className:o.tableUi,children:[a.jsx("select",{onChange:e=>w(e.target.value),children:d.map(e=>a.jsx("option",{value:e,children:e}))}),q&&a.jsx("label",{htmlFor:"search",children:a.jsx("input",{id:"search",type:"text",value:u,onChange:N,className:o.searchInput})}),a.jsx("br",{}),a.jsx(L,{data:r,theme:I,sort:_,pagination:l,children:e=>a.jsxs(a.Fragment,{children:[a.jsx(M,{children:a.jsx(Q,{children:d.map(t=>a.jsx(U,{sortKey:t,children:t}))})}),a.jsx(G,{children:e.map((t,s)=>a.jsxs(J,{item:t,children:[a.jsx(i,{children:t.name}),a.jsx(i,{children:t.gender}),a.jsx(i,{children:t.age}),a.jsx(i,{children:a.jsx(Y,{button:a.jsx(X,{size:"120px",children:"send to E-mail"}),dialogMsg:"이메일을 보내시겠습니까?",layout:"basic",submitHandle:()=>{}})}),a.jsx(i,{children:t.submit?a.jsx("img",{src:K,alt:"o"}):a.jsx("img",{src:O,alt:"x"})})]},s))})]})}),a.jsx("br",{}),a.jsx("div",{style:{textAlign:"center"},children:a.jsx("span",{className:o.pagination,children:l.state.getPages(r.nodes).map((e,t)=>a.jsx("button",{type:"button",style:{fontWeight:l.state.page===t?"bold":"normal"},onClick:()=>l.fns.onSetPage(t),children:t+1},t))})}),a.jsx("br",{})]})})}v.__docgenInfo={description:`- table 칸 배열을 변경하고 싶을 때 \r
-  ＊ {\r
-  --data-table-library_grid-template-columns: minmax(0px, 160px)\r
-    minmax(0px, 160px) minmax(0px, 160px) minmax(0px, 2fr) minmax(0px, 160px) !important;\r
- }\r
-와 같이 변경해준다. 단 다른 테이블에 영향을 끼칠 수 있으니 잘 확인해야한다.\r
- custom table의 경우 직접 table컴포넌트를 수정한다.`,methods:[],displayName:"DataTableWithButton",props:{tableHeader:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},nodes:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},divideBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stripe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#fff"',computed:!1}},searchBox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},page:{required:!0,tsType:{name:"union",raw:"false | { page: number, size: number }",elements:[{name:"literal",value:"false"},{name:"signature",type:"object",raw:"{ page: number, size: number }",signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"size",value:{name:"number",required:!0}}]}}]},description:""},modifyData:{required:!1,tsType:{name:"boolean"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const de={title:"Example/DataTableEx-1",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"]},Z=["name","gender","age","email","submit"],ee=[{name:"홍길동",gender:"male",age:24,email:"hong@abc.com",submit:!1},{name:"홍길동",gender:"male",age:24,email:"hong@abc.com",submit:!1},{name:"김복자",gender:"female",age:25,email:"kim@abc.com",submit:!0},{name:"갑을병",gender:"male",age:24,email:"gab@abc.com",submit:!1},{name:"박춘배",gender:"male",age:24,email:"hong@abc.com",submit:!1},{name:"김철수",gender:"male",age:24,email:"kim2@abc.com",submit:!0},{name:"황영희",gender:"female",age:28,email:"hwang@abc.com",submit:!0},{name:"이지영",gender:"female",age:28,email:"lee@abc.com",submit:!1},{name:"안은영",gender:"female",age:24,email:"an@abc.com",submit:!1},{name:"윤진수",gender:"male",age:24,email:"yun@abc.com",submit:!1}],m={args:{tableHeader:Z,nodes:ee,stripe:!0,divideBorder:!1,bgColor:"#fff",searchBox:!0,page:{page:0,size:4},modifyData:!1}};var h,y,j;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(y=m.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const ue=["Primary"];export{m as Primary,ue as __namedExportsOrder,de as default};
