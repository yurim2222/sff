import{j as t}from"./jsx-runtime-Bdgnjw47.js";import{r as d}from"./index-Ccz02SFX.js";const m="_tooltip_p2x4b_1",h="_tooltip_click_p2x4b_13",v="_tooltip_hover_p2x4b_23",u="_tooltip_hover_text_rb_p2x4b_31",b="_tooltip_hover_text_rt_p2x4b_33",j="_tooltip_hover_text_lb_p2x4b_35",k="_tooltip_hover_text_lt_p2x4b_37",f="_tooltip_click_text_rb_p2x4b_39",N="_tooltip_click_text_rt_p2x4b_41",g="_tooltip_click_text_lb_p2x4b_43",T="_tooltip_click_text_lt_p2x4b_45",y="_text_area_p2x4b_237",e={tooltip:m,tooltip_click:h,tooltip_hover:v,tooltip_hover_text_rb:u,tooltip_hover_text_rt:b,tooltip_hover_text_lb:j,tooltip_hover_text_lt:k,tooltip_click_text_rb:f,tooltip_click_text_rt:N,tooltip_click_text_lb:g,tooltip_click_text_lt:T,text_area:y};function x({type:_="hover",text:l,position:i="rightTop",children:c}){const[o,a]=d.useState(!1);return _==="hover"?t.jsx(t.Fragment,{children:t.jsxs("div",{className:e.tooltip,children:[t.jsx("div",{className:e.tooltip_hover,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:c}),o&&i==="rightBottom"?t.jsx("div",{className:e.tooltip_hover_text_rb,children:t.jsx("div",{className:e.text_area,children:l})}):o&&i==="rightTop"?t.jsx("div",{className:e.tooltip_hover_text_rt,children:t.jsx("div",{className:e.text_area,children:l})}):o&&i==="leftBottom"?t.jsx("div",{className:e.tooltip_hover_text_lb,children:t.jsx("div",{className:e.text_area,children:l})}):o&&i==="leftTop"?t.jsx("div",{className:e.tooltip_hover_text_lt,children:t.jsx("div",{className:e.text_area,children:l})}):!o&&t.jsx(t.Fragment,{})]})}):t.jsxs("div",{className:e.tooltip,children:[t.jsx("div",{className:e.tooltip_click,onClick:()=>a(!o),children:c}),o&&i==="rightBottom"?t.jsx("div",{className:e.tooltip_click_text_rb,children:t.jsx("div",{className:e.text_area,children:l})}):o&&i==="rightTop"?t.jsx("div",{className:e.tooltip_click_text_rt,children:t.jsx("div",{className:e.text_area,children:l})}):o&&i==="leftBottom"?t.jsx("div",{className:e.tooltip_click_text_lb,children:t.jsx("div",{className:e.text_area,children:l})}):o&&i==="leftTop"?t.jsx("div",{className:e.tooltip_click_text_lt,children:t.jsx("div",{className:e.text_area,children:l})}):!o&&t.jsx(t.Fragment,{})]})}x.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{type:{required:!1,tsType:{name:"union",raw:'"hover" | "click"',elements:[{name:"literal",value:'"hover"'},{name:"literal",value:'"click"'}]},description:"",defaultValue:{value:'"hover"',computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"rightBottom" | "rightTop" | "leftTop" | "leftBottom"',elements:[{name:"literal",value:'"rightBottom"'},{name:"literal",value:'"rightTop"'},{name:"literal",value:'"leftTop"'},{name:"literal",value:'"leftBottom"'}]},description:"",defaultValue:{value:'"rightTop"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B=_=>t.jsx("div",{style:{height:"80px"},children:t.jsx(_,{})}),C={title:"UI/Tooltip",component:x,decorators:[B],parameters:{layout:"centered"},tags:["autodocs"]},r={args:{type:"click",text:"Show Tootip Box",position:"leftBottom",children:"좌측 하단"}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: "click",
    text: "Show Tootip Box",
    position: "leftBottom",
    children: "좌측 하단"
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const R=["Primary"];export{r as Primary,R as __namedExportsOrder,C as default};
