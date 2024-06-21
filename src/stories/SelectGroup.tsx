import React, { useEffect } from 'react'
import styles from './Select.module.css';
import { useState } from 'react';
import { SelectGroupProps } from '../atoms';

export default function SelectGroup({ options, width = '250px', value }: SelectGroupProps) {


  const [item, setItem] = useState<string>(value ? value : options[0].value);

  const handleChange = (event: any) => {
    setItem(event as unknown as string)
    console.log(item)
    console.log(options)
  };


  const groupedOptions = options.reduce((acc: { [key: string]: any }, item: any) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.select_container} style={{ width }}>
      <select
        className={styles.select_box}
        defaultValue={item}
        onChange={handleChange}
      >
        {Object.keys(groupedOptions).map((category) => {
          return (
            <optgroup key={category} label={category}>
              {groupedOptions[category].map((item: any) => (
                <option key={item.value} value={item.value}>{item.name}</option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};
