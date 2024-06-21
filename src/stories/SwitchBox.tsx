import React, { ChangeEvent, useState } from 'react';
import styles from './Switch.module.css';
import { SwitchBoxProps } from '../atoms';

export default function SwitchBox({ defaultSelect, text = ["selected", "unselected"] }: SwitchBoxProps) {
  const [selected, setSelected] = useState(defaultSelect);
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
  };
  return (
    <div className={selected ? styles.switch_checked : styles.switch_unchecked}>
      <label className={selected ? styles.switch_label : styles.switch_label_checked}>
        <input
          type="checkbox"
          className={selected ? styles.switch_input : styles.switch_input_checked}
          checked={selected}
          onChange={handleToggle}
        />
      </label>
      <span className={styles.switch_text}>{selected ? text[0] : text[1]}</span>
    </div>
  )
}
