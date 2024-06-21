import React from 'react'
import styles from './Footer.module.css';
import { useNavigate } from 'react-router-dom';
import { footerProps } from '../atoms';

export default function Footer({ logo, indexUrl, color = "#ccc" }: footerProps) {

  return (
    <footer className={styles.footer} style={{ background: color }}>
      <div>
        <div className={styles.logo}>
          {logo && <img src={logo} alt="logo" onClick={() => console.log(indexUrl)} />
          }
        </div>
        <p className={styles.p}>
          (82)2-494-4707 / soxcom@naver.com <br />
          301ho, 23, Seokgye-ro 18-gil, Nowon-gu, Seoul, 01886 Republic of Korea<br />
          © 2018-2022 by S.O.X Co.Ltd. All rights reserved<br />
        </p>
      </div>
    </footer>
  )
}
