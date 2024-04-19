import React, { useState } from 'react';
import styles from "./AccordionContent.module.css"
import { AccordionContentProps, AccordionContentType } from '../atoms';


export default function AccordionContent02({ accordion }: AccordionContentProps) {
  const [openSections, setOpenSections] = useState<AccordionContentType[]>([]);

  const toggleSection = (section: AccordionContentType) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter(s => s !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const isOpen = (section: AccordionContentType) => openSections.includes(section);

  return (
    <div className={styles.accordion_container}>
      {accordion.map((section, index) => (
        <div key={index} className={styles.accordion}>
          <button
            onClick={() => toggleSection(section)}
            className={styles.accordion_item}
          >
            {section?.title}
            <span>{isOpen(section) ? '▴' : '▾'}</span>
          </button>
          <div
            className={`${styles.accordion_sub} ${isOpen(section) ? styles.open_section : styles.close_section}`}
          >
            <div className={styles.sub_menu}>
              {section?.content}
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}
