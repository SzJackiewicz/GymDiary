import React, { useState } from "react";
import styles from "../DayTemplate/DayTemplate.module.scss";
import WorkoutInput from "../NewWorkout/WorkoutInput/WorkoutInput";
import SingleExcercise from "../NewWorkout/SingleExcercise/SingleExcercise";
import HomeBtn from "../HomeBtn/HomeBtn";
import SaveBtn from "../SaveBtn/SaveBtn";

const DayTemplate = () => {
  const [excercise, setExcercise] = useState([]);
  const [excerciseName, setExcerciseName] = useState('');
  const [excerciseArr, setExcerciseArr]= useState([])

 
  const handleChange = (e) => {
    setExcerciseName(e.target.value)
  }

  const addExcercise = (e) => {
    e.preventDefault();
    setExcercise([...excercise, <SingleExcercise />]);
    setExcerciseArr([...excerciseArr, excerciseName])
  };

  //dodaje kolejną tablicę, ale nazwa ćwiczenia łączy nazwy obu tablic

   return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
        <HomeBtn />
        <SaveBtn />
        </div>
        <WorkoutInput addExcercise={addExcercise} excerciseName={excerciseName} handleChange={handleChange}/>
        {excercise.map((item) => (
        <SingleExcercise excerciseArr={excerciseArr}/>
        ))}
      </div>
    </>
  );
};

export default DayTemplate;
