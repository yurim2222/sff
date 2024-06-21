import React from 'react'
import styles from './Menu.module.css';
type MenuNavProps = {
  menu: { title: string, sub: { text: string, click?: () => void }[], }[];
  type: 'total' | 'each'
}
export default function Menu({ menu, type = 'total' }: MenuNavProps) {
  return (
    <div className={styles.menuDiv}>
      <ul className={styles.menu}>
        {menu.map(item => <li className={`${styles.firstMenu}`}>
          {item.title}
          {type === 'each' && <ul className={styles.eachSubMenu}>
            {item.sub.map(sub => {
              if (sub.click !== undefined) {
                return <li onClick={sub.click}>{sub.text}</li>
              } else {
                return <li>{sub.text}</li>
              }
            })}
          </ul>}
        </li>)}
      </ul>
      {type === 'total' && <div className={styles.totalMenuDiv}>
        {menu.map((item) => {
          return <ul>
            {item.sub.map(sub => {
              if (sub.click !== undefined) {
                return <li onClick={sub.click}>{sub.text}</li>
              } else {
                return <li>{sub.text}</li>
              }
            })}
          </ul>
        })}
      </div>}
    </div>
  )
}
