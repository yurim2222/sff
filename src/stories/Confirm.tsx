import React, { useState } from 'react';
import Button from './Button';
import styles from './Prompt.module.css';
import { ConfirmProps } from '../atoms';


/**
- Prompt dialog
- button은 컴포넌트로 직접 props에 전달한다
- 확인을 눌렀을 시 실행될 함수는 submitHandle로 전달한다.
- 예를들어 확인 시 특정 api를 호출한다면 submitHandle로={()=>api를 호출하는 함수} 
**/

export const Confirm = ({ button, layout, fullScreen, dialogMsg, submitHandle }: ConfirmProps) => {

  const [show, setShow] = useState(false);

  const submit = () => {
    setShow(false);
    submitHandle();
  }

  return (
    <>
      <div onClick={() => setShow(prev => !prev)}>{button}</div>
      {show ? <div className={styles.screenContainer} >
        <div className={fullScreen ? styles.dialogContainerFullScreen : styles.dialogContainer}>
          <div className={layout === 'center' ? styles.textContainerCenter : styles.textContainerBasic}>
            {dialogMsg}
          </div>
          <div className={layout === 'center' ? styles.buttonContainerCenter : styles.buttonContainer}>
            <Button onClick={() => setShow(false)} color="gray">취소</Button>
            <Button onClick={submit}>확인</Button>
          </div>
        </div >
      </div> : <></>}
    </>
  )
}
