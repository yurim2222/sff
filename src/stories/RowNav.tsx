import React from 'react'
import styles from './RowNav.module.css';

type RowNavProps = {
  menu: { text: string, click?: () => void }[];
  cursor?: 'pointer' | 'default'
}

export default function RowNav({ menu, cursor = 'pointer' }: RowNavProps) {
  return (
    <ul className={styles.rowNav}>
      {menu.map(item => {
        if (item.click !== undefined) {
          return <li onClick={item.click}
            className={cursor === 'pointer' ? styles.pointer : styles.default}>{item.text}</li>
        } else {
          return <li
            className={cursor === 'pointer' ? styles.pointer : styles.default}>{item.text}</li>
        }
      })}
    </ul>
  )
}
