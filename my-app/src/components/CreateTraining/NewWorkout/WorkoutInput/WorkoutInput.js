import React, {useState} from "react";
import SingleExcercise from '../SingleExcercise/SingleExcercise'
import style from "./WorkoutInput.module.scss"

const WorkoutInput = ({addExcercise, handleChange, excerciseName}) => {

  
  return (
    <form>
      <input type="text" placeholder="excercise" value={excerciseName} name="name" onChange={handleChange}/>
      <button onClick = {addExcercise}>ADD</button>
    </form>
  )
};

export default WorkoutInput;
