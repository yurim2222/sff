import{j as f}from"./jsx-runtime-Bdgnjw47.js";import{r as e}from"./index-Ccz02SFX.js";import{i as h,r as x,v as g}from"./chart_resource-twdHlh72.js";function u({type:l,title:p,labels:r,data:s}){e.useEffect(()=>{console.log(s)},[]);const m={title:{text:p},xAxis:{data:r,axisLabel:{interval:0,formatter:function(o){return o.split(`
`).join(`

`)}}},yAxis:{},series:[{type:l,data:s.resultList.total}],toolbox:{show:!0,feature:{saveAsImage:{show:!0}}}},t=e.useRef(null),[d,C]=e.useState(r);return e.useEffect(()=>{t.current&&h(t.current).setOption(m)},[d,t]),f.jsx("div",{ref:t,style:{width:"100%",height:"100%",minHeight:"300px",minWidth:"500px"}})}u.__docgenInfo={description:"",methods:[],displayName:"EChartBasic"};const v={title:"EChart/EChartLine",component:u,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{type:"bar",title:"주간 방문객",labels:x,data:g}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    title: '주간 방문객',
    labels: rangeLabels,
    data: visitorData
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["LineChart"];export{a as LineChart,y as __namedExportsOrder,v as default};
