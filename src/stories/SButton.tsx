import React from 'react'
import './Button.module.css';
import { ButtonProps } from '../atoms';

export default function Button({ color = "#2d4373", text = "#fff", size = "90px", figure = "rounded", onClick, children }: ButtonProps) {

  const style = {
    backgroundColor: color,
    color: text,
    width: size,
    height: '35px',
    lineHeight: '30px',
    margin: '1px',
    borderRadius: figure === "rounded" ? "5px" : figure === "circle" ? "30px" : "0"
  };

  return (
    <button
      style={style}
      onClick={onClick}>
      {children}
    </button>
  )
}
