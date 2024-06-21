import React from 'react'
import './Button.module.css';
import { ButtonProps } from '../atoms';
import styles from './Button.module.css';

export default function Button({ color = "#2d4373", text = "#fff", size = "90px", figure = "rounded", onClick, children }: ButtonProps) {

  const style = {
    backgroundColor: color,
    color: text,
    width: size,
    height: '35px',
    lineHeight: '30px',
    margin: '1px',
    borderRadius: figure === "rounded" ? "5px" : figure === "circle" ? "30px" : "0",
    border: 'none',
  };

  return (
    <button
      style={style}
      className={styles.Button}
      onClick={onClick}>
      {children}
    </button>
  )
}
