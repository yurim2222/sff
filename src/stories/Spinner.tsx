import React from 'react'
import styles from './Spinner.module.css';
import { SpinnerProps } from '../atoms';

export default function Spinner({ size = "big", color = "#2d4373" }: SpinnerProps) {
  return (
    <div>
      <div className={size === "big" ? styles.spinner : styles.s_spinner}></div>
    </div>
  )
}
