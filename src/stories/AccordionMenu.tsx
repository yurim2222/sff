import React, { useState } from 'react';
import styles from "./AccordionContent.module.css"
import { AccordionMenuProps, AccordionMenuType } from '../atoms';




export default function AccordionMenu({ type, accordion }: AccordionMenuProps) {

  const [openSection, setOpenSection] = useState<AccordionMenuType>(null);
  const [openSections, setOpenSections] = useState<AccordionMenuType[]>([]);

  const toggleSection = (section: AccordionMenuType) => {
    if (type === 'each') {
      setOpenSection(openSection === section ? null : section);
    } else if (type === 'toggle') {
      if (openSections.includes(section)) {
        setOpenSections(openSections.filter(s => s !== section));
      } else {
        setOpenSections([...openSections, section]);
      }
    }
  };

  const isOpen = (section: AccordionMenuType) => openSections.includes(section);

  const handleClick = (url: string) => {
    console.log(url)
  }


  return (
    <div className={styles.accordion_container}>
      {accordion && accordion.map((section: AccordionMenuType, index: number) => (
        <div key={index} className={styles.accordion}>
          <button
            onClick={() => toggleSection(section)}
            className={styles.accordion_item}>
            {section?.title}
            {type === 'each' ? <span>{openSection === section ? '▴' : '▾'}</span> : <span>{isOpen(section) ? '▴' : '▾'}</span>}
          </button>
          {
            type === 'each' ? <div className={`${styles.accordion_sub} ${openSection === section ? styles.open_section : styles.close_section}`}>
              <div>
                {section?.list && section?.list.map(item =>
                  <li className={`${item.url ? styles.cursor_pointer : styles.cursor_default} ${styles.accordion_sub} ${styles.sub_menu}`}
                    onClick={() => item.url && handleClick(item.url)}>
                    {item.title}
                  </li>)}
              </div>
            </div> :
              <div
                className={isOpen(section) ? styles.open_section : styles.close_section}
              >
                <div>
                  {section?.list.map(item =>
                    <li className={`${item.url ? styles.cursor_pointer : styles.cursor_default} ${styles.accordion_sub} ${styles.sub_menu}`}>
                      {item.title}
                    </li>)}
                </div>
              </div>
          }
        </div>
      ))}
    </div>
  );
}
