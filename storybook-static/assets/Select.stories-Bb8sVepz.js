import{j as t}from"./jsx-runtime-Bdgnjw47.js";import{s as n}from"./Select.module-DrAHJI5B.js";import{r as v}from"./index-Ccz02SFX.js";function d({options:r,width:m="250px",value:s}){const[c,p]=v.useState(s||r[0].value),g=e=>{p(e.target.value)};return t.jsx("div",{className:n.select_container,style:{width:m},children:t.jsx("select",{className:n.select_box,defaultValue:c,onChange:g,children:r.map((e,f)=>t.jsx("option",{value:e.value,children:e.name},f))})})}d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string, name: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"{ value: string, name: string }[]"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'250px'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""}}};const o=[{value:"edge1-e4:5f:01:70:53:50",name:"edge1-e4:5f:01:70:53:50"},{value:"edge1-e4:5f:01:70:53:51",name:"edge1-e4:5f:01:70:53:51"},{value:"edge1-e4:5f:01:70:53:52",name:"edge1-e4:5f:01:70:53:52"},{value:"edge1-e4:5f:01:70:53:53",name:"edge1-e4:5f:01:70:53:53"}],j={title:"SELECT/Select",component:d,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{options:o,value:o[1].value}};var l,i,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: edges,
    value: edges[1].value
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const S=["Primary"];export{a as Primary,S as __namedExportsOrder,j as default};
