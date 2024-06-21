import{j as h}from"./jsx-runtime-Bdgnjw47.js";import{r as a}from"./index-Ccz02SFX.js";import{i as d,r as f,h as C}from"./chart_resource-twdHlh72.js";function n({title:l,labels:c,data:u}){let m={title:{text:l,left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},series:[{name:"Access From",type:"pie",radius:"50%",data:u.resultList.map(r=>({value:r.count,name:r.name})),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};const t=a.useRef(null),[p,g]=a.useState(c);return a.useEffect(()=>{t.current&&d(t.current).setOption(m)},[p,t]),h.jsx("div",{ref:t,style:{width:"100%",height:"100%",minHeight:"300px",minWidth:"500px"}})}n.__docgenInfo={description:"",methods:[],displayName:"EChartCircle"};const y={title:"EChart/EChartCircle",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{title:"30대 직장인 취미",labels:f,data:C}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: '30대 직장인 취미',
    labels: rangeLabels,
    data: hobbyData
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const w=["CircleChart"];export{e as CircleChart,w as __namedExportsOrder,y as default};
