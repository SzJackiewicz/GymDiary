import React from "react"
import styles from '../CreateTraining/DayTemplate/DayTemplate.module.scss'
import WorkoutInput from '../WorkoutInput/WorkoutInput'


const DayTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <WorkoutInput/>
    </div>
  )
};

export default DayTemplate;
