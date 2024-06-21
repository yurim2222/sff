import{j as l}from"./jsx-runtime-Bdgnjw47.js";import{r as a}from"./index-Ccz02SFX.js";import{i as d,m as h}from"./chart_resource-twdHlh72.js";function p({type:A,title:m,labels:r,data:o}){console.log(o);let c={title:{text:m},legend:{data:r},xAxis:[{type:"category",data:["무게(g)","가격(만 단위)","줌 배율"]}],yAxis:[{type:"value"}],series:o,toolbox:{show:!0,feature:{saveAsImage:{show:!0}}}};const t=a.useRef(null),[u,f]=a.useState(r);return a.useEffect(()=>{t.current&&d(t.current).setOption(c)},[u,t]),l.jsx("div",{ref:t,style:{width:"100%",height:"100%",minHeight:"300px",minWidth:"500px"}})}p.__docgenInfo={description:"",methods:[],displayName:"EChartCompare"};const y={title:"EChart/EChartCompare",component:p,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"bar",title:"A B 모델 비교",labels:["A 모델","B 모델"],data:h}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    title: 'A B 모델 비교',
    labels: ["A 모델", "B 모델"],
    data: modelData
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const E=["CompareChart"];export{e as CompareChart,E as __namedExportsOrder,y as default};
