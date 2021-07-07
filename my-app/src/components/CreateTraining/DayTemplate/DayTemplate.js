import React, {useState} from "react";
import styles from '../DayTemplate/DayTemplate.module.scss';
import WorkoutInput from '../NewWorkout/WorkoutInput/WorkoutInput'
import SingleExcercise from '../NewWorkout/SingleExcercise/SingleExcercise'


const DayTemplate = () => {

  const [excercise, setExcercise] = useState([])


  const addExcercise = (e) =>{
    console.log(e);
    e.preventDefault()
    setExcercise([...excercise, <SingleExcercise/>])

  }
  return (
    <div className={styles.wrapper}>
      <WorkoutInput addExcercise={addExcercise}/>
      {excercise.map(item=> <SingleExcercise />)}
    </div>
  )
};

export default DayTemplate;
