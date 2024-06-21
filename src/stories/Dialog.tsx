import React, { useState } from 'react';
import Button from './Button';
import styles from './Dialog.module.css';
import { DialogProps } from '../atoms';

/**
- Prompt dialog
- button은 컴포넌트로 직접 props에 전달한다
- dialog를 닫은 후 특정 함수를 실행시키고 싶다면 closeHandle에 전달한다.
- 예를들어 dialog를 닫은 후 메인페이지로 이동하게 된다면 closeHandle={()=>navigate('/main')} (useNavigate사용)
**/
export const Dialog = ({ button, dialogMsg, layout, fullScreen, closeHandle }: DialogProps) => {

  const [show, setShow] = useState(false);

  const submit = () => {
    closeHandle && closeHandle()
    setShow(false);
  }
  return (
    <>
      {/* <Button
        color={button.color}
        figure={button.figure}
        onClick={() => setShow(prev => !prev)}
        size={button.size}
        text={button.text}
      >
        {button.children}
      </Button> */}
      <div onClick={() => setShow(prev => !prev)}>{button}</div>
      {show ? <div className={styles.screenContainer} >
        <div className={fullScreen ? styles.dialogContainerFullScreen : styles.dialogContainer}>
          <div className={layout === 'center' ? styles.textContainerCenter : styles.textContainerBasic}>{dialogMsg}</div>
          <div className={layout === 'center' ? styles.buttonContainerCenter : styles.buttonContainer}>
            <Button onClick={submit} color="gray">확인</Button>
          </div>
        </div >
      </div > : <></>}
    </>
  )
}
