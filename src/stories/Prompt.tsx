import React, { useRef, useState } from 'react';
import Button from './Button';
import styles from './Prompt.module.css';
import { PromptProps } from '../atoms';


/**
- Prompt dialog
- button은 컴포넌트로 직접 props에 전달한다
- input칸을 통해 입력된 value는 submitHandle을 통해 props로 전달된다.
- 해당 value를 사용하고 싶다면 prompt를 사용하는 컴포넌트에서 함수를 만들어 submitHandle을 통해 전달한다.
- 예를들어 입력된 value값을 alertd로 출력하고 싶다면, submitHandle={(value)=>alert(value)}를 전달해준다.
**/

export const Prompt = ({ button, type, layout, fullScreen, dialogMsg, defaultVal, submitHandle }: PromptProps) => {

  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);;

  const submit = () => {
    inputRef.current && submitHandle(inputRef.current.value);
    setShow(false);
  }

  return (
    <>
      <div onClick={() => setShow(prev => !prev)}>{button}</div>
      {show ? <div className={styles.screenContainer} >
        <div className={fullScreen ? styles.dialogContainerFullScreen : styles.dialogContainer}>
          <div className={layout === 'center' ? styles.textContainerCenter : styles.textContainerBasic}>{dialogMsg}</div>
          <input type={type} className={styles.inputArea} ref={inputRef} defaultValue={defaultVal} />
          <div className={layout === 'center' ? styles.buttonContainerCenter : styles.buttonContainer}>
            <Button onClick={() => setShow(false)} color="gray">취소</Button>
            <Button onClick={submit}>확인</Button>
          </div>
        </div >
      </div> : <></>}
    </>
  )
}
