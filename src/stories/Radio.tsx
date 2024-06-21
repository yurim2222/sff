import React, { useState } from 'react'
import styles from './Radio.module.css';
import { RadioProps } from '../atoms';

export default function Radio({ type = "row", name, values, value }: RadioProps) {

  const [item, setItem] = useState<string>(value ? value.val : values[0].val);
  const handleChange = (event: any) => {
    setItem(event.target.value as unknown as string);
  };

  if (type === "row") {
    return (
      <>
        <div className={styles.radio_row}>
          {values.map((v: any) => (
            <label key={v.val}>
              <input type="radio" name={name} value={v.val} checked={v.val === item} onChange={handleChange} />
              {v.title}
            </label>
          ))}
        </div></>
    )
  } else {
    return (
      <>
        <div className={styles.radio_column}>
          {values.map((v: any) => (
            <label key={v.val}>
              <input type="radio" name={name} value={v.val} checked={v.val === value} onChange={handleChange} />
              {v.title}
            </label>
          ))}
        </div>
      </>
    )
  }
}
