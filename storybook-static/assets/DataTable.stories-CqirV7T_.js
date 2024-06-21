import{j as t}from"./jsx-runtime-Bdgnjw47.js";import{r as n}from"./index-Ccz02SFX.js";import{K,r as L,f as O,s as l,h as R,i as H,Q,O as U,o as W,a as k,b as G}from"./pagination-D5xxvu6c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D8_Koz8h.js";function j({tableHeader:o,nodes:f,divideBorder:q=!0,stripe:C=!1,bgColor:S="#fff",searchBox:T=!0,page:g}){const[m,_]=n.useState(""),[i,w]=n.useState(o[0]),D=f,[d,N]=n.useState(D),B=e=>{_(e.target.value)},a={nodes:d.filter(e=>typeof e[i]=="string"?e[i].toLowerCase().includes(m.toLowerCase()):e[i].toString().includes(m))};n.useEffect(()=>{console.log(i)},[i]);const b={string:e=>r=>r.sort((s,c)=>s[e].localeCompare(c[e])),number:e=>r=>r.sort((s,c)=>s[e]-c[e]),default:e=>r=>r},E=e=>isNaN(a.nodes[0][e])?isNaN(a.nodes[0][e])?b.string(e):r=>r:b.number(e),F=(e,r)=>{const s=E(e);return console.log(s(r)),s(r)},z=K(a,{onChange:$},{sortIcon:{size:"10px"},sortFns:{sortData:d}}),[P,h]=n.useState(!1);n.useEffect(()=>{console.log("d",a),console.log("s",d),console.log("n",f),h(!1)},[d,P]);function $(e,r){h(!0);const s=F(r.sortKey,a.nodes);console.log(s),N(s)}const I=L({Table:`
    .table{
      font-size:30px;
    }
    `,HeaderRow:`
        .th {
          border-bottom: 1px solid #a0a8ae;
        }
        background: ${S};
      `,BaseCell:`
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }

        padding: 8px 16px;
      `}),p=O(a,{state:g!==!1?g:void 0,onChange:V});function V(e,r){console.log(e,r)}return t.jsx("div",{className:`${q?l.divideBorder:""} ${C?l.stripe:""}`,children:t.jsxs("div",{className:l.tableUi,children:[t.jsx("select",{onChange:e=>w(e.target.value),children:o.map(e=>t.jsx("option",{value:e,children:e}))}),T&&t.jsx("label",{htmlFor:"search",children:t.jsx("input",{id:"search",type:"text",value:m,onChange:B,className:l.searchInput})}),t.jsx("br",{}),t.jsx(R,{data:a,theme:I,sort:z,pagination:p,children:e=>t.jsxs(t.Fragment,{children:[t.jsx(H,{children:t.jsx(Q,{children:o.map(r=>t.jsx(U,{sortKey:r,children:r}))})}),t.jsx(W,{children:e.map(r=>t.jsx(k,{item:r,children:o.map((s,c)=>{const A=r[o[c].toLowerCase()];return t.jsx(G,{children:A.toString()})})},r.id))})]})}),t.jsx("br",{}),t.jsx("div",{style:{textAlign:"center"},children:t.jsx("span",{className:l.pagination,children:p.state.getPages(a.nodes).map((e,r)=>t.jsx("button",{type:"button",style:{fontWeight:p.state.page===r?"bold":"normal"},onClick:()=>p.fns.onSetPage(r),children:r+1},r))})}),t.jsx("br",{})]})})}j.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{tableHeader:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},nodes:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},divideBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stripe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#fff"',computed:!1}},searchBox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},page:{required:!0,tsType:{name:"union",raw:"false | { page: number, size: number }",elements:[{name:"literal",value:"false"},{name:"signature",type:"object",raw:"{ page: number, size: number }",signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"size",value:{name:"number",required:!0}}]}}]},description:""},modifyData:{required:!1,tsType:{name:"boolean"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const re={title:"Example/DataTable",component:j,parameters:{layout:"fullscreen"},tags:["autodocs"]},J=["name","cid","rssi","mnc","rsrq","net_type","mcc"],M=[{name:"가",rssi:0,mnc:"06",rsrq:-3,net_type:4,pci:129,rsrp:-81,band:"2600",time:1686190877089,mcc:"450",ta:11,cid:"1071882"},{name:"바",rssi:-79,mnc:"06",rsrq:-20,net_type:0,pci:9,rsrp:-134,band:"3050",time:1686190877090,mcc:"450",ta:0,cid:"0"},{name:"다",rssi:-79,mnc:"06",rsrq:-24,net_type:0,pci:430,rsrp:-138,band:"3050",time:1686190877091,mcc:"453",ta:0,cid:"0"},{name:"avd7254",rssi:-79,mnc:"08",rsrq:-26,net_type:0,pci:135,rsrp:-140,band:"3050",time:1686190877091,mcc:"450",ta:0,cid:"0"},{name:"avd7254",rssi:-81,mnc:"07",rsrq:-15,net_type:0,pci:238,rsrp:-130,band:"100",time:1686190877092,mcc:"460",ta:0,cid:"0"},{name:"mnd7454",rssi:-81,mnc:"06",rsrq:-22,net_type:0,pci:394,rsrp:-138,band:"100",time:1686190877092,mcc:"498",ta:0,cid:"0"},{name:"bvd7254",rssi:-81,mnc:"06",rsrq:-23,net_type:0,pci:367,rsrp:-139,band:"100",time:1686190877093,mcc:"450",ta:0,cid:"0"}],u={args:{tableHeader:J,nodes:M,stripe:!0,divideBorder:!1,bgColor:"#fff",searchBox:!0,page:!1}};var y,x,v;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tableHeader: tableHeader,
    nodes: nodes,
    stripe: true,
    divideBorder: false,
    bgColor: '#fff',
    searchBox: true,
    page: false
  }
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const te=["Primary"];export{u as Primary,te as __namedExportsOrder,re as default};