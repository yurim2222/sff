import React from 'react'
import styles from './Card.module.css';
import { CardProps, tagProps } from '../atoms';

export default function Card({ img, mainText, subText, mainTag, subTag, callbackFx }: CardProps) {
  return (
    <div className={styles.card} onClick={callbackFx && callbackFx}>
      <img src={img} alt='thumbnail' className={styles.card_img} />
      <div className={styles.card_info}>
        <p className={styles.title}>{mainText}</p>
        <p className={styles.writer}>{subText}<span> 코디네이터</span></p>
        <div className={styles.tag_container}>
          {mainTag === null ? <></> : mainTag?.map(item => <Tag key={item} text={'# ' + item} />)}
          {subTag !== undefined && subTag.map(item => <Tag key={item} text={item} color='sub' />)}
        </div>
      </div>
    </div>
  )
}
const Tag = ({ text, color = 'main' }: tagProps) => {
  return (
    <>
      {
        color === 'main'
          ? <div className={styles.mainTag} >{text}</div>
          : <div className={styles.subTag} >{text}</div>
      }
    </>
  )
}
