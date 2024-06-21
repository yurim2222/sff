import React, { useEffect } from 'react'
import styles from './Select.module.css';
import { useState } from 'react';
import { SelectProps } from '../atoms';

export default function Select({ options, width = '250px', value }: SelectProps) {


  const [item, setItem] = useState<string>(value ? value : options[0].value);


  const handleChange = (event: any) => {
    setItem(event.target.value as unknown as string);
  };



  return (
    <div className={styles.select_container} style={{ width }}>
      <select
        className={styles.select_box}
        defaultValue={item}
        onChange={handleChange}
      >
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
