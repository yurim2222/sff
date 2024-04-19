
// **--**--Accordion--**--**
export type AccordionContentType = { title: string, content: any } | null;
export type AccordionMenuType = { title: string, list: { title: string, url?: string }[], } | null;
export type AccordionArray = AccordionContentType[];
export type AccordionMenuArray = AccordionMenuType[];

//**--**--Dialog--**--**
export type DialogProps = {
  button: React.ReactNode,
  dialogMsg: string,
  layout?: 'basic' | 'center',
  fullScreen?: boolean,
  closeHandle: () => void;
}

export type ConfirmProps = {
  button: React.ReactNode,
  type?: string;
  dialogMsg: string;
  submitHandle: () => void;
  layout?: 'basic' | 'center';
  fullScreen?: boolean;
}

export type PromptProps = {
  button: React.ReactNode,
  type?: string;
  dialogMsg: string;
  defaultVal?: string;
  submitHandle: (text?: string) => void;
  layout?: 'basic' | 'center';
  fullScreen?: boolean;
  motion?: boolean;
}



/// **--**--Data TAble--**--**
export type tableProps = {
  tableHeader: string[],
  nodes: any[],
  divideBorder?: boolean,
  stripe?: boolean,
  bgColor?: string,
  searchBox?: boolean,
  page: false | { page: number, size: number },
  modifyData?: boolean,
  handleChange?: (data: any) => void;
}

export interface AccordionContentProps {
  type: 'each' | 'toggle',
  accordion: AccordionArray;
}
export interface AccordionMenuProps {
  type: 'each' | 'toggle',
  accordion: AccordionMenuArray;
}

// radio
export interface RadioProps {
  type?: "row" | "col",
  name?: string,
  values: { title: string, val: string }[],
  value: { title: string, val: string }
}

// **--**--Button--**--**
export interface ButtonProps {
  color?: "#2d4373" | "#c12322" | "#454545" | "#f8ab42" | "#9333ea" | "7e38e1" | string,
  text?: "#000" | "#fff",
  size?: string,
  figure?: 'rounded' | 'circle' | 'square',
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactNode
}

export interface IconButtonProps extends ButtonProps {
  icon: 'hamburger' | 'close' | 'rightArrow' | 'leftArrow' | 'upArrow' | 'bottomArrow'
}

// **--**--BreadcrumbItem--**--**

//**--**--BreadCrumb--**--**
export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

// **--**--CheckBox--**--**
export interface CheckBoxProps {
  type?: "row" | "column" | 'grid',
  options: { title: string, val: string | number }[],
  color?: string
}

export interface StepBox {
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
};


export interface StepProps {
  steps: StepBox[];
  option?: 'row' | 'col';
}

export interface StepItemProps {
  step: StepBox;
}

export interface VideoProps {
  videoLink: string;
  height?: string;
}

// **--**--Switch--**--**
export interface SwitchBoxProps {
  defaultSelect: boolean,
  text?: [string, string]
}

// **--**--Chart--**--**

export interface ChartProps {
  data: any;
  width?: number;
  height?: number;
  type: 'bar' | 'line'
}

// **--**--Tooltip--**--**
export interface TooltipProps {
  type: "hover" | "click",
  text: string,
  position?: "rightBottom" | "rightTop" | "leftTop" | "leftBottom",
  children: React.ReactNode
}

// **--**--Select--**--**
export type SelectProps = {
  options: { value: string, name: string }[],
  width?: string,
  value?: string
}

// **--**--SelectGroup--**--**
export type SelectGroupProps = {
  options: { value: string, name: string, category: string }[],
  width?: string,
  value?: string
}


// **--**--SlideTool--**--**
export interface SlideToolProps {
  button: React.ReactNode,
  position: "left" | "right" | "top" | "bottom",
  active: boolean,
  children: React.ReactNode,
  closeBtn: () => void
}


// **--**--Spinner--**--**
export interface SpinnerProps {
  size?: "big" | "small",
  color?: string,
}

// **--**--Banner--**--**
export interface BannerProps {
  slideType: "img" | "component" | "text",
  size: { width: string, height: string }
  slideItems: any[]
}

export interface CardProps {
  img: string;
  mainText: string;
  subText?: string;
  state?: string;
  mainTag?: string[] | undefined;
  subTag?: string[] | undefined;
  callbackFx?: () => void;
  handleCopyBtn?: () => void;
  handleInfoBtn?: () => void;
  handleEditBtn?: () => void;
  handleDelBtn?: () => void;
}

export interface tagProps {
  text: string;
  color?: 'main' | 'sub';
}

// **--**--footer--**--**
export interface footerProps {
  logo?: string,
  indexUrl?: string,
  color?: string,
}

