import React from 'react'

import styles from './Step.module.css';
import { StepBox, StepItemProps, StepProps } from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export function StepItem({ step }: StepItemProps) {
  const stepColor = step.completed === true ? "2d4373" : "#cdd3e0";

  return (
    <div className={`${step.active ? styles.active_step : ''} ${step.completed ? styles.completed_step : styles.incompleted_step} ${styles.step}`}>
      <div className={styles.icon} >
        <FontAwesomeIcon icon={faCheck} style={{ color: stepColor }} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{step.title}</div>
        <div className={styles.description}>{step.description}</div>
      </div>
    </div>
  );
};

export default function Step({ steps, option = "row" }: StepProps) {
  return (
    <div className={option === "row" ? styles.steps_row : styles.steps_col}>
      {steps.map((step: StepBox) =>
        <StepItem
          step={step} />)}
    </div>
  )

}