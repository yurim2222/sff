import{j as r}from"./jsx-runtime-Bdgnjw47.js";import{s as l}from"./Select.module-DrAHJI5B.js";import{r as f}from"./index-Ccz02SFX.js";function g({options:o,width:d="250px",value:s}){const[n,y]=f.useState(s||o[0].value),v=e=>{y(e),console.log(n),console.log(o)},u=o.reduce((e,a)=>(e[a.category]||(e[a.category]=[]),e[a.category].push(a),e),{});return r.jsx("div",{className:l.select_container,style:{width:d},children:r.jsx("select",{className:l.select_box,defaultValue:n,onChange:v,children:Object.keys(u).map(e=>r.jsx("optgroup",{label:e,children:u[e].map(a=>r.jsx("option",{value:a.value,children:a.name},a.value))},e))})})}g.__docgenInfo={description:"",methods:[],displayName:"SelectGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string, name: string, category: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"category",value:{name:"string",required:!0}}]}}],raw:"{ value: string, name: string, category: string }[]"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'250px'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""}}};const c=[{category:"meal",value:"pizza",name:"🍕"},{category:"meal",value:"hamburger",name:"🍔"},{category:"meal",value:"hotdog",name:"🌭"},{category:"meal",value:"chicken",name:"🍗"},{category:"fruit",value:"apple",name:"🍎"},{category:"fruit",value:"orange",name:"🍊"},{category:"fruit",value:"grape",name:"🍇"},{category:"fruit",value:"banana",name:"🍌"}],b={title:"SELECT/SelectGroup",component:g,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{options:c,value:c[0].value}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: foods,
    value: foods[0].value
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const q=["Group"];export{t as Group,q as __namedExportsOrder,b as default};
