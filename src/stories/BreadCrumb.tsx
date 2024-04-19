import React from 'react'
import styles from './BreadCrumb.module.css';
import { BreadcrumbProps } from '../atoms';

export default function BreadCrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.ol}>
        {items.map((item, index) => (
          <li key={index} className={styles.li}>
            {index !== 0 && <span className={styles.span}>/</span>}
            {item.path ? <a href={item.path} className={styles.a}>
              {item.label}
            </a> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
