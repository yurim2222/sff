import React, { useState } from 'react'
import styles from './SlideTool.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SlideToolProps } from '../atoms';

export default function SlideTool({ button, position, children }: SlideToolProps) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div onClick={() => setActive(prev => !prev)}>{button}</div>
      {
        (position === "top" ? <div className={active ? styles.top_tool_container_active : styles.top_tool_container}>
          <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={styles.top_x_btn} />
          {children}
        </div>
          : position === "bottom" ? <div className={active ? styles.bottom_tool_container_active : styles.bottom_tool_container}>
            <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={styles.side_x_btn} />
            {children}
          </div>
            : position === "left" ? <div className={active ? styles.left_tool_container_active : styles.left_tool_container}>
              <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={styles.side_x_btn} />
              {children}
            </div>
              : position === "right" && <div className={active ? styles.right_tool_container_active : styles.right_tool_container}>
                <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={styles.side_x_btn} />
                {children}
              </div>)
      }
    </>
  )
}
