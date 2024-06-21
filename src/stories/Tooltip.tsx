import React, { useState } from 'react'
import styles from './Tooltip.module.css';
import { TooltipProps } from '../atoms';

export default function Tooltip({ type = "hover", text, position = "rightTop", children }: TooltipProps) {

  const [view, setView] = useState(false);

  if (type === "hover") {
    return (
      <>
        <div className={styles.tooltip}>
          <div className={styles.tooltip_hover} onMouseEnter={() => setView(true)} onMouseLeave={() => setView(false)}>{children}</div>
          {(view && position === "rightBottom") ? <div className={styles.tooltip_hover_text_rb}><div className={styles.text_area}>{text}</div></div>
            : (view && position === "rightTop") ? <div className={styles.tooltip_hover_text_rt}><div className={styles.text_area}>{text}</div></div>
              : (view && position === "leftBottom") ? <div className={styles.tooltip_hover_text_lb}><div className={styles.text_area}>{text}</div></div>
                : (view && position === "leftTop") ? <div className={styles.tooltip_hover_text_lt}><div className={styles.text_area}>{text}</div></div>
                  : !view && <></>}
        </div>
      </>
    )
  } else {
    return (
      <div className={styles.tooltip}>
        <div className={styles.tooltip_click} onClick={() => setView(!view)}>{children}</div>
        {(view && position === "rightBottom") ? <div className={styles.tooltip_click_text_rb}><div className={styles.text_area}>{text}</div></div>
          : (view && position === "rightTop") ? <div className={styles.tooltip_click_text_rt}><div className={styles.text_area}>{text}</div></div>
            : (view && position === "leftBottom") ? <div className={styles.tooltip_click_text_lb}><div className={styles.text_area}>{text}</div></div>
              : (view && position === "leftTop") ? <div className={styles.tooltip_click_text_lt}><div className={styles.text_area}>{text}</div></div>
                : !view && <></>}
      </div>
    )
  }
}
