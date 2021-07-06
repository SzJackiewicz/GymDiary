import React from "react"
import styles from '../DayTemplate/DayTemplate.module.scss';
import WorkoutInput from '../NewWorkout/WorkoutInput/WorkoutInput'
import SingleExcercise from '../NewWorkout/SingleExcercise/SingleExcercise'


const DayTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <WorkoutInput/>
      <SingleExcercise/>
    </div>
  )
};

export default DayTemplate;
