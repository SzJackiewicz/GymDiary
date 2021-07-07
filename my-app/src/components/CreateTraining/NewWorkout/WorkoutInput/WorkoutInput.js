import React, {useState} from "react";
import SingleExcercise from '../SingleExcercise/SingleExcercise'
import style from "./WorkoutInput.module.scss"

const WorkoutInput = ({addExcercise}) => {


  return (
    <form>
      <input type="text" placeholder="excercise"/>
      <button onClick = {addExcercise}>ADD</button>
    </form>
  )
};

export default WorkoutInput;
