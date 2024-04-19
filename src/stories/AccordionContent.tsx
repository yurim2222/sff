import React, { useState } from 'react';
import styles from "./AccordionContent.module.css"
import { AccordionContentProps, AccordionContentType } from '../atoms';

export default function AccordionContent({ type, accordion }: AccordionContentProps) {

  const [openSection, setOpenSection] = useState<AccordionContentType>(null);
  const [openSections, setOpenSections] = useState<AccordionContentType[]>([]);


  const toggleSection = (section: AccordionContentType) => {
    if (type === 'each') {
      setOpenSection(openSection === section ? null : section)
    } else if (type === 'toggle') {
      if (openSections.includes(section)) {
        setOpenSections(openSections.filter(s => s !== section));
      } else {
        setOpenSections([...openSections, section]);
      }
    }
  };

  const isOpen = (section: AccordionContentType) => openSections.includes(section);


  return (
    <div className={styles.accordion_container}>
      {accordion.map((section: AccordionContentType, index: number) => (
        <div key={index} className={styles.accordion}>
          <button
            onClick={() => toggleSection(section)}
            className={styles.accordion_item}
          >
            {section?.title}
            {type === 'each' ? <span>{openSection === section ? '▴' : '▾'}</span> : <span>{isOpen(section) ? '▴' : '▾'}</span>}
          </button>
          {
            type === 'each' ? <div
              className={`${openSection === section ? styles.open_section : styles.close_section} ${styles.accordion_sub}`}
            >
              <div className={styles.sub_menu}>
                {section?.content}
              </div>
            </div> :
              <div
                className={`${styles.accordion_sub} ${isOpen(section) ? styles.open_section : styles.close_section}`}
              >
                <div className={styles.sub_menu}>
                  {section?.content}
                </div>
              </div>
          }
        </div>
      ))
      }
    </div >
  );
}
